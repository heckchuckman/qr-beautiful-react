import React from 'react';
import { rand, defaultViewBox } from '../utils/helper';
import { RendererWrapper, RendererProps, SFC, drawIcon } from './RendererWrapper';

interface QRRandRectProps extends RendererProps {
}

const QRRandRect: SFC<QRRandRectProps> = (props) => {
    const { qrcode, className, styles } = props;
    return (
        <svg className={className} style={styles.svg} width="100%" height="100%" viewBox={defaultViewBox(qrcode)} fill="white"
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            {listPoints(props)}
            {drawIcon(props)}
        </svg>
    );
}


function listPoints({ qrcode }: QRRandRectProps) {
    if (!qrcode) return []

    const nCount = qrcode.getModuleCount();
    const pointList = [];
    let id = 0;

    let randArr = [];
    for (let row = 0; row < nCount; row++) {
        for (let col = 0; col < nCount; col++) {
            randArr.push([row, col]);
        }
    }
    randArr.sort(function () {
        return (0.5 - Math.random());
    })

    for (let i = 0; i < randArr.length; i++) {
        let row = randArr[i][0];
        let col = randArr[i][1];
        if (qrcode.isDark(row, col)) {
            let tempRand = rand(0.8, 1.3);
            let randNum = rand(50, 230);
            let tempRGB = [
                'rgb(' + Math.floor(20 + randNum) + ',' + Math.floor(170 - randNum / 2) + ',' + Math.floor(60 + randNum * 2) + ')',
                'rgb(' + Math.floor(-20 + randNum) + ',' + Math.floor(130 - randNum / 2) + ',' + Math.floor(20 + randNum * 2) + ')'
            ];
            let width = 0.15;
            pointList.push(<rect key={id++} opacity="0.9" fill={tempRGB[1]} width={1 * tempRand + width} height={1 * tempRand + width} x={row - (tempRand - 1) / 2} y={col - (tempRand - 1) / 2} />);
            pointList.push(<rect key={id++} fill={tempRGB[0]} width={1 * tempRand} height={1 * tempRand} x={row - (tempRand - 1) / 2} y={col - (tempRand - 1) / 2} />);
        }
    }
    return pointList;
}

QRRandRect.defaultCSS = {
    svg: {
    }
}

export default RendererWrapper(QRRandRect);

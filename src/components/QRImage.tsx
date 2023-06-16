import React from 'react';
import { defaultViewBox } from '../utils/helper';
import { getTypeTable, QRPointType } from '../utils/qrcodeHandler';
import { RendererWrapper, RendererProps, SFC } from './RendererWrapper';

enum Type {
    Rect = 'rect',
    Round = 'round',
}

enum PosType {
    Rect = 'rect',
    Round = 'round',
    Planet = 'planet',
}

interface QRImageProps extends RendererProps {
    image?: string,
    type?: Type | string,
    size?: number,
    opacity?: number,
    darkColor?: string,
    lightColor?: string,
    posType?: PosType | string,
    posColor?: string,
}

const QRImage: SFC<QRImageProps> = (props) => {
    const { qrcode, className, styles } = props;
    return (
        <svg className={className} style={styles.svg} width="100%" height="100%" viewBox={defaultViewBox(qrcode)} fill="white"
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            {listPoints(props)}
        </svg>
    );
}


function listPoints({ qrcode, image, type, size, opacity, darkColor, lightColor, posType, posColor }: QRImageProps) {
    if (!qrcode) return []

    const nCount = qrcode.getModuleCount();
    const typeTable = getTypeTable(qrcode);
    const pointList = new Array(nCount);

    image = image! || "data:image/jpeg;base64,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";
    type = type! || Type.Rect;
    size = size! / 100 / 3 || 0.3;
    opacity = opacity! / 100 || 1.0;
    darkColor = darkColor! || "#000000";
    lightColor = lightColor! || "#FFFFFF";
    posType = posType! || PosType.Rect;
    posColor = posColor! || "#000000";
    let id = 0;

    const vw = [3, -3];
    const vh = [3, -3];

    if (size <= 0) size = 1.0

    pointList.push(<image key={id++} x="0" y="0" width={nCount} height={nCount} xlinkHref={image} />);

    for (let x = 0; x < nCount; x++) {
        for (let y = 0; y < nCount; y++) {

            if (typeTable[x][y] === QRPointType.ALIGN_CENTER || typeTable[x][y] === QRPointType.ALIGN_OTHER || typeTable[x][y] === QRPointType.TIMING) {
                if (qrcode.isDark(x, y)) {
                    if (type === Type.Rect)
                        pointList.push(<rect opacity={opacity} width={size} height={size} key={id++} fill={darkColor} x={x + (1 - size) / 2} y={y + (1 - size) / 2} />)
                    else if (type === Type.Round)
                        pointList.push(<circle opacity={opacity} r={size / 2} key={id++} fill={darkColor} cx={x + 0.5} cy={y + 0.5} />)
                } else {
                    if (type === Type.Rect)
                        pointList.push(<rect opacity={opacity} width={size} height={size} key={id++} fill={lightColor} x={x + (1 - size) / 2} y={y + (1 - size) / 2} />)
                    else if (type === Type.Round)
                        pointList.push(<circle opacity={opacity} r={size / 2} key={id++} fill={lightColor} cx={x + 0.5} cy={y + 0.5} />)
                }
            }
            else if (typeTable[x][y] === QRPointType.POS_CENTER) {
                if (qrcode.isDark(x, y)) {
                    if (posType === PosType.Rect) {
                        pointList.push(<rect width={1} height={1} key={id++} fill={posColor} x={x} y={y} />);
                    } else if (posType === PosType.Round) {
                        pointList.push(<circle key={id++} fill="white" cx={x + 0.5} cy={y + 0.5} r={5} />)
                        pointList.push(<circle key={id++} fill={posColor} cx={x + 0.5} cy={y + 0.5} r={1.5} />)
                        pointList.push(<circle key={id++} fill="none" strokeWidth="1" stroke={posColor} cx={x + 0.5} cy={y + 0.5} r={3} />)
                    } else if (posType === PosType.Planet) {
                        pointList.push(<circle key={id++} fill="white" cx={x + 0.5} cy={y + 0.5} r={5} />)
                        pointList.push(<circle key={id++} fill={posColor} cx={x + 0.5} cy={y + 0.5} r={1.5} />)
                        pointList.push(<circle key={id++} fill="none" strokeWidth="0.15" strokeDasharray="0.5,0.5" stroke={posColor} cx={x + 0.5} cy={y + 0.5} r={3} />)
                        for (let w = 0; w < vw.length; w++) {
                            pointList.push(<circle key={id++} fill={posColor} cx={x + vw[w] + 0.5} cy={y + 0.5} r={0.5} />)
                        }
                        for (let h = 0; h < vh.length; h++) {
                            pointList.push(<circle key={id++} fill={posColor} cx={x + 0.5} cy={y + vh[h] + 0.5} r={0.5} />)
                        }
                    }
                }

            }
            else if (typeTable[x][y] === QRPointType.POS_OTHER) {
                if (qrcode.isDark(x, y)) {
                    if (posType === PosType.Rect) {
                        pointList.push(<rect width={1} height={1} key={id++} fill={posColor} x={x} y={y} />);
                    }
                } else {
                    if (posType === PosType.Rect) {
                        pointList.push(<rect width={1} height={1} key={id++} fill="white" x={x} y={y} />);
                    }
                }

            }
            else {
                if (qrcode.isDark(x, y)) {
                    if (type === Type.Rect)
                        pointList.push(<rect opacity={opacity} width={size} height={size} key={id++} fill={darkColor} x={x + (1 - size) / 2} y={y + (1 - size) / 2} />)
                    else if (type === Type.Round)
                        pointList.push(<circle opacity={opacity} r={size / 2} key={id++} fill={darkColor} cx={x + 0.5} cy={y + 0.5} />)
                } else {
                    if (type === Type.Rect)
                        pointList.push(<rect opacity={opacity} width={size} height={size} key={id++} fill={lightColor} x={x + (1 - size) / 2} y={y + (1 - size) / 2} />)
                    else if (type === Type.Round)
                        pointList.push(<circle opacity={opacity} r={size / 2} key={id++} fill={lightColor} cx={x + 0.5} cy={y + 0.5} />)
                }

            }
        }
    }

    return pointList;
}

QRImage.defaultCSS = {
    svg: {
    }
}

export default RendererWrapper(QRImage);

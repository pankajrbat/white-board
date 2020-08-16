import './board.css';
import React, { useRef, useState, useEffect } from 'react';

const DEFAULT_SETTINGS = {
    lineCap: 'round',
    strokeStyle: 'black',
    lineWidth: 1,
    operation: 'source-over'
};

function Board(props) {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isPainting, setIsPainting] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        // store context ref
        contextRef.current = context;
    }, []);

    useEffect(() => {
        // apply settings //@TODO: on resize getting cleard.
        const canvas = canvasRef.current;
        canvas.width = props.width || '400';
        canvas.height = props.height || '400';
    }, [props.width, props.height]);

    useEffect(() => {
        // apply settings
        const context = contextRef.current;
        context.lineCap = props.lineCap || DEFAULT_SETTINGS.lineCap;
        context.strokeStyle = props.strokeStyle || DEFAULT_SETTINGS.strokeStyle;
        context.lineWidth = props.lineWidth || DEFAULT_SETTINGS.lineWidth;
        context.globalCompositeOperation = props.operation || DEFAULT_SETTINGS.operation;
    }, [props.strokeStyle, props.operation, props.lineWidth]);
    

    const start = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsPainting(true);
    };

    const finish = () => {
        contextRef.current.closePath();
        setIsPainting(false);
    };

    const draw = ({ nativeEvent }) => {
        if (!isPainting) { return; }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke()
    };

    return (
        <canvas
            onMouseDown={start}
            onMouseUp={finish}
            onMouseMove={draw}
            ref={canvasRef}
        />
    )
}

export default Board;
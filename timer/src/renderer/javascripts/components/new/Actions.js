import React from "react";
import PlayIcon from 'play.svg';
import StopIcon from 'stop.svg';

const Actions = () => {
    return (

        <div className="actions">
            <div className="time">
                00:00:00
            </div>
            <div className="trigger">
                <PlayIcon width='24' height='24' />
                {/* <StopIcon width='24' height='24' /> */}
            </div>
        </div>

    )
};

export default Actions;
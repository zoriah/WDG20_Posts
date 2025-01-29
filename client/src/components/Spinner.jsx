import {SpinnerCircular} from "spinners-react";

export function Spinner() {
    return (
        <SpinnerCircular
            size={50}
            thickness={100}
            speed={100}
            color='#ffd700'
            secondaryColor='rgba(0, 0, 0, 0.44)'
        />
    )
}

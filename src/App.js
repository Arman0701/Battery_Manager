import useBattery from "./hooks/useBattery";
import convertSeconds from "./helpers/convertSeconds";

import "./App.scss";

export default function App() {
    const {
        charging,
        chargingTime,
        dischargingTime,
        level
    } = useBattery();

    return (
        <div className="wrapper">
            <h3>Battery status</h3>

			<div className="battery">
				<div className={`battery-bg ${charging ? "charging" : ""}`} style={{
					width: `${level}%`
				}}></div>
				<div className="battery-tail"></div>
				<span>{level}%</span>
			</div>

			{charging && chargingTime !== Infinity && 
				<span>
					Charging time {convertSeconds(chargingTime)}
				</span>
			}
			{charging && dischargingTime !== Infinity && 
				<span>
					Time remaining {convertSeconds(dischargingTime)}
				</span>
			}
        </div>
    );
}
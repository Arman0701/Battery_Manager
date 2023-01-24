import { useEffect, useState } from "react";

import convertSeconds from "./helpers/convertSeconds";

import "./App.scss";

function App() {
    const [charging, setCharging] = useState(false);
    const [chargingTime, setChargingTime] = useState(0);
    const [dischargingTime, setDischargingTime] = useState(0);
    const [level, setLevel] = useState(0);

    function getBatteryInfo() {
        navigator.getBattery().then((battery) => {
            function updateAllBatteryInfo() {
                updateChargeInfo();
                updateLevelInfo();
                updateChargingInfo();
                updateDischargingInfo();
            }
            updateAllBatteryInfo();
			
            battery.addEventListener("chargingchange", () => {
                updateChargeInfo();
				updateChargingInfo();

            });
			battery.addEventListener("levelchange", () => {
				updateLevelInfo();
			});
			battery.addEventListener("chargingtimechange", () => {
				updateChargingInfo();
			});
			battery.addEventListener("dischargingtimechange", () => {
				updateDischargingInfo();
			});
            function updateChargeInfo() {
                setCharging(battery.charging);
            }
			
            function updateLevelInfo() {
				setLevel(battery.level);
            }
			
            function updateChargingInfo() {
				setChargingTime(battery.chargingTime);
            }
			
            function updateDischargingInfo() {
				setDischargingTime(battery.dischargingTime);
            }
        });
    }

    useEffect(() => {
        getBatteryInfo();

        // eslint-disable-next-line
    }, []);

    return (
        <div className="wrapper">
            <h3>Battery Info Board</h3>

            {!charging && (
				<p>Discharging after {convertSeconds(dischargingTime)}</p>
				)}
            <p>Level: {(level * 100)}%</p>
			{charging && <>
				<p>Charging now</p>
				<p>Charging time: {chargingTime}</p>
			</>}
        </div>
    );
}

export default App;

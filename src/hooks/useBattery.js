import { useEffect, useState } from "react";

export default function useBattery() {
    const [charging, setCharging] = useState(false);
    const [chargingTime, setChargingTime] = useState(0);
    const [dischargingTime, setDischargingTime] = useState(0);
    const [level, setLevel] = useState(0);
    const [onChargingChange, setOnChargingChange] = useState();
    const [onDischargingChange, setOnDischargingChange] = useState();
    const [onChargingTimeChange, setOnChargingTimeChange] = useState();
    const [onLevelChange, setOnLevelChange] = useState();

    navigator.getBattery().then((battery) => {
        setCharging(battery.charging);
        setChargingTime(battery.chargingTime);
        setDischargingTime(battery.dischargingTime);
        setLevel(Math.round(battery.level * 100));

		console.log('Log battery ::: ', battery)

        battery.addEventListener("chargingchange", () => {
			setCharging(battery.charging) /// 
		});
        battery.addEventListener("chargingtimechange", () => {
			setChargingTime(battery.chargingTime)
		});
        battery.addEventListener("dischargingtimechange", () => {
			setDischargingTime(battery.dischargingTime)
		});
        battery.addEventListener("levelchange", () => {
			setLevel(battery.level) ///
		});
    });

    return {
        charging,
        chargingTime,
        dischargingTime,
        level,

        setOnChargingChange,
        setOnDischargingChange,
        setOnChargingTimeChange,
        setOnLevelChange,
    };
}

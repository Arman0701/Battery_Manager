export default function convertSeconds(seconds) {
	const minutes = Math.floor(seconds % 60)
	const hours = Math.floor(seconds / 3600)

	return `${hours} h ${minutes} m`
}
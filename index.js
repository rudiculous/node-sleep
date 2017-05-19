export default function sleep(time, value) {
  return new Promise(resolve => setTimeout(resolve, time, value))
}

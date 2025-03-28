function formatNumber(num: number): string {
  return "#" + num.toString().padStart(3, "0");
}

export default formatNumber;
function getDate(timestamp) {
  return /^\d+$/.test(timestamp)
    ? new Date(parseInt(timestamp, 10))
    : new Date(timestamp)
}

function formatDate(date) {
  return Number.isNaN(date.valueOf())
    ? { error: 'Invalid Date' }
    : { unix: date.getTime(), utc: date.toUTCString() }
}

function getTimestamp(timestamp) {
  return formatDate(getDate(timestamp))
}

function getDefaultTimestamp() {
  return formatDate(new Date())
}

module.exports = { getTimestamp, getDefaultTimestamp }

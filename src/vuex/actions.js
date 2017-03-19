export const thingListsCounter = function ({ dispatch, state },thinglist) {
  dispatch('GETTHINGLIST', thinglist)
}
export const loadingCounter = function ({ dispatch, state },loading) {
  dispatch('GETLOADING', loading)
}

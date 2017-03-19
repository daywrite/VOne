export const thingListsCounter = function ({ dispatch, state },thinglist) {
  dispatch('GETTHINGLIST', thinglist)
}

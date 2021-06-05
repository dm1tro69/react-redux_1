
export const profileActionType = {
    SET_PROFILE: 'PROFILE.SET_PROFILE',
    SET_THEME: 'PROFILE.SET_THEME',
}
export const profileActions = {
    setProfile: (payload) => ({type: profileActionType.SET_PROFILE, payload}),
    setTheme: (payload) => ({type: profileActionType.SET_THEME, payload})
}
export function survive_button(person: string){
    if (person === 'man'){
        useCookie('person').value = 'man'
    } else {
        useCookie('person').value = 'man2'
    }
    navigateTo('/surviveonpe')
}
export function survive_button_go_to_game() {
    navigateTo('/surviveonpe')
}
export function survive_event_info_select(){
    const person_temp = useCookie('person').value
    if (person_temp === 'man'){
        return 'true'
    } else if (person_temp === 'man2') {
        return 'true'
    } else {
        return 'false'
    }
}
export function survive_event_info_check(){
    const person_temp = useCookie('person').value
    if (person_temp === 'man'){
        return 'true'
    } else if (person_temp === 'man2') {
        return 'true'
    } else {
        return navigateTo('/surviveonpeSelect')
    }
}

export function survive_on_vertical() {
    const horizontal = window.innerWidth > window.innerHeight;
    const vertical = window.innerWidth < window.innerHeight;
        if (horizontal) {
            return 'false';
        } else if (vertical) {
            return 'true';
        }
    survive_on_vertical();
}

export function survive_event_delete_cookie(){
    useCookie('person').value = ''
}

export function survive_event_back_home(){
    useCookie('person').value = ''
}
import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

 const UseDarkMode = () => {
    const [darkModeOn, setDarkModeOn] = useLocalStorage('dark-mode-on', false)

    useEffect(() => {

        if(darkModeOn) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        
    }, [darkModeOn])

    return [darkModeOn, setDarkModeOn];
};


export default UseDarkMode;
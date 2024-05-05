import React from "react";
import st from './ProfileInfo.module.css';

 

const ProfileInfo =()=> {
    return (
    <div>
        <div>
        <img src="https://t4.ftcdn.net/jpg/01/04/78/75/360_F_104787586_63vz1PkylLEfSfZ08dqTnqJqlqdq0eXx.jpg"></img>
        </div>
        <div className={st.descriptionBlock}>
        ava + description.
        </div>
    </div>)
}

export default ProfileInfo;

/* Создадим отдельный файл ProfileInfo.jsx,
поместим в него картинку, аватарку и  
описание. Экспортируем этом компонент в
компонент Profile.jsx, где разместив в 
виде тега.
*/
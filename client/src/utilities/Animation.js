export default class Animation{
    static animation= new Animation();
    fadeInScreen = (screen_name) => {
        let screen = document.getElementById(screen_name);
        if (!screen_name || !screen) return;
    
        screen.style.opacity = "2";
        screen.style.transform = "translateY(4px)";
      };
}
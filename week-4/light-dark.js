//light and dark theme from week 1 index.html

setDefaultTheme();
// functions for light and dark mode from WEB330 week1 index.html page
//   this function will switch the website color theme to what the user selects

    function toggleMode(x)
    {
        let colorTheme = document.body.classList; // get the CSS class for the color theme
        let iconMode = x.classList; // assign the classes to the button

//if the current view is light, then switch to the dark-theme

        if (colorTheme.value === "light-theme")
        {
            localStorage.clear();
            localStorage.setItem("mode", "dark-theme");
            localStorage.setItem("iconMode", "fa-toggle-on");
            localStorage.setItem("iconText", "Dark Mode");
        }
        
        else
        {
            localStorage.clear();
            localStorage.setItem("mode", "light-theme");
            localStorage.setItem("iconMode", "fa-toggle-off");
            localStorage.setItem("iconText", "Light Mode");
        }

 //if the current view is dark, then switch to the light-theme

        colorTheme.value = localStorage.getItem("mode");
        iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
        document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
    }

//resets the view to the default light-theme view

    function clearLocalStorage() {
        localStorage.clear();
        document.body.classList.value = "light-theme";
        document.getElementById("icon-text").innerHTML = "Light Mode";
        document.getElementById("icon-mode").classList.value = "fa fa-toggle-off pull-right";
    }
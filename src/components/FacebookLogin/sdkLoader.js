/**
 * Created by Joseph on 15/03/2018.
 */
import appConfig from '../../config/index';

var sdkLoader = function (eventName) {
    window.fbAsyncInit = function() {
        this.FB.init({
            appId: appConfig.facebook_auth_api.app_id,
            cookie: true,
            xfbml: true,
            version: appConfig.facebook_auth_api.version
        });

        this.FB.AppEvents.logPageView();

        var fbInitEvent = new Event(eventName);
        document.dispatchEvent(fbInitEvent);
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = appConfig.facebook_auth_api.sdk_url;
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
};
export default sdkLoader;
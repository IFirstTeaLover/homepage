function checkDeviceType() {
    if (navigator.userAgentData) {
        const deviceType = navigator.userAgentData.mobile ? 'mobile' : 'desktop';
        return deviceType;
    }
    // Если `userAgentData` не поддерживается, fallback на `userAgent`
    return checkDeviceTypeWithUserAgent();
}

function checkDeviceTypeWithUserAgent() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('mobile')) {
        return 'mobile';
    } else if (userAgent.includes('tablet') || userAgent.includes('ipad')) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}
function checkLoop(){
var device = checkDeviceType()
localStorage.setItem("device", device);
}
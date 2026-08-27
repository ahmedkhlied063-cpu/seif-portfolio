/**
 * Portfolio Template Script
 * Handles Intro Splash Screen Animation & Dynamic Display
 */
document.addEventListener('DOMContentLoaded', () => {
    // الوقت بالمللي ثانية لانتهاء حركة الباب بالـ CSS قبل إخفاء الطبقة
    const splashDuration = 2200; 
    const splashElement = document.getElementById('splashScreen');

    if (splashElement) {
        setTimeout(() => {
            splashElement.classList.add('hidden');
        }, splashDuration);
    }
});
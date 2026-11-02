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

    // تفعيل زرار حفظ جهة الاتصال (Save Contact)
    const saveContactBtn = document.getElementById('saveContactBtn');
    if (saveContactBtn) {
        saveContactBtn.addEventListener('click', function (e) {
            e.preventDefault();

            // بيانات سيف اللي هتتسيف في جهات الاتصال عند العميل
            const vCardData = 
`BEGIN:VCARD
VERSION:3.0
FN:Saif Wael
TITLE:Physical Therapist
TEL:+905346946389
EMAIL:saifwael408@gmail.com
URL:https://www.instagram.com/saif_wael22
END:VCARD`;

            // إنشاء ملف وهمي نوعه vcf
            const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
            const url = URL.createObjectURL(blob);

            // إنشاء رابط تحميل مؤقت والضغط عليه برمجياً
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Saif_Wael_Physical_Therapist.vcf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});

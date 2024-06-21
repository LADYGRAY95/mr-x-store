'use client';
import React from 'react';
import Banner from '../banner/banner';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';


const About: React.FC = () => {
    return (
        <div className='container mx-auto px-4'>
            <Navbar />
            <br />
            <h1 className='text-center text-4xl font-bold text-primary'>About Page</h1>
            <p className='text-xl text-center'>Welcome to the About us section !</p>
            <br />
            <br />
            <p className='text-md text-center text-gray-400 "'>Welcome to our online gaming store, your trusted source for all your gaming needs in Tunisia. We are a dedicated team of gaming enthusiasts committed to providing our customers with a seamless and enjoyable shopping experience.
                <br />At our store, we offer a wide range of products and services catering to the diverse gaming community. From the latest video games across all platforms, including PC, consoles, and mobile, to exclusive gaming keys, in-game content, and tokens, we have it all. We also offer a selection of gaming accounts and memberships for popular platforms like Spotify, Netflix, and various social media services, ensuring that you have access to all your entertainment needs in one convenient place. <br />Our commitment to quality and customer satisfaction is at the heart of everything we do. We take pride in curating a diverse and up-to-date inventory, ensuring that our customers have access to the latest and greatest titles and gaming-related offerings. Whether you're a hardcore gamer, a casual enthusiast, or simply looking to enhance your gaming experience, our store is your one-stop destination.
                <br />What sets us apart is our unwavering dedication to providing fast, reliable, and guaranteed service. We understand the importance of timely deliveries and have streamlined our processes to ensure that your orders are processed and shipped efficiently. Our team of knowledgeable and friendly customer service representatives are always ready to assist you with any inquiries or concerns you may have, ensuring a seamless and satisfactory shopping experience.
                <br />As a trusted gaming destination in Tunisia, we are committed to building strong relationships with our customers. We value your loyalty and strive to create a community where gamers can connect, share their experiences, and discover new and exciting gaming opportunities.
                <br /><br />Thank you for choosing our online gaming store. We look forward to being a part of your gaming journey and helping you unlock the full potential of your gaming experiences</p>
                <p className='text-md text-gray-400 text-center'> <br /> <br /> <p className='text-center text-white text-xl '>مرحبًا بكم </p><br />
                أهلا وسهلا بكم في متجرنا للألعاب الإلكترونية عبر الإنترنت، المصدر الموثوق لجميع احتياجاتك في مجال الألعاب في تونس. نحن فريق متفان من هواة الألعاب الإلكترونية ملتزمون بتوفير تجربة شراء سلسة وممتعة لعملائنا.
في متجرنا، نقدم مجموعة واسعة من المنتجات والخدمات التي تلبي مجتمع الألعاب المتنوع. بدءًا من أحدث ألعاب الفيديو عبر جميع المنصات، بما في ذلك أجهزة الكمبيوتر والوحدات التحكم والهواتف المحمولة، إلى مفاتيح الألعاب الحصرية والمحتوى والرموز داخل اللعبة، لدينا كل ما تحتاجه. كما نقدم مجموعة من حسابات الألعاب والاشتراكات في المنصات الشعبية مثل Spotify و Netflix وخدمات وسائل التواصل الاجتماعي المختلفة، مما يضمن لك الوصول إلى جميع احتياجات الترفيه الخاصة بك في مكان واحد مريح.
<br />
إن التزامنا بالجودة والرضا الكامل للعملاء هو جوهر كل ما نقوم به. نفخر بتنويع وتحديث مخزوننا باستمرار، مما يضمن لعملائنا الوصول إلى أحدث وأعظم العناوين والعروض المتعلقة بالألعاب. سواء كنت لاعبًا محترفًا أو هاوي متحمس أو مجرد باحث عن تعزيز تجربة ألعابك، فإن متجرنا هو الوجهة الأولى والأخيرة لك.
<br />
ما يميزنا هو تفانينا في توفير خدمة سريعة وموثوقة وضمانات. ندرك أهمية التوصيلات في الوقت المناسب وقمنا بتبسيط عملياتنا لضمان معالجة طلباتك وشحنها بكفاءة. فريق خدمة العملاء المتمرس والودود لدينا دائما على استعداد لمساعدتك بأي استفسارات أو مخاوف قد تكون لديك، مما يضمن تجربة تسوق سلسة ومرضية.
<br />
بصفتنا وجهة ألعاب موثوقة في تونس، نحن ملتزمون ببناء علاقات قوية مع عملائنا. نقدر ولاءك ونسعى إلى إنشاء مجتمع حيث يمكن للاعبين التواصل والمشاركة في تجاربهم واكتشاف فرص ألعاب جديدة وإثارة.
<br />
شكرا لاختيارك متجرنا للألعاب الإلكترونية عبر الإنترنت. نحن نتطلع إلى أن نكون جزءًا من رحلتك في عالم الألعاب ومساعدتك على إطلاق كامل إمكانات تجارب ألعابك.
                </p>
                <br />
                <br />
            <Footer />
        </div>
    );
};

export default About;
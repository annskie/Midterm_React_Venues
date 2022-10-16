import {useEffect, useState} from 'react';

const Home = () => {
    return (
        <div className="home text-center">
            <div  className='mt-3 shadow-lg mb-3'> 
            <h1>MATER DEI COLLEGE</h1>
            <h3>Cabulijan, Tubigon, Bohol</h3>
            </div>
            <img src="./home.png" alt="" width="100%" height="95%" position="center"/>
            <p className='mt-3 text-primary'>
            Nestled at the northern part of Bohol is a modest but elegant looking college. Mater Dei College offers a harmonious blend of a peaceful rural ambience and a fast-paced technological advancement. Demographically, MDC can be considered a small college with a population of more than a thousand students, but her small size did not deter her from having big visions. In spite of limited resources, she dares to dream-dreams which have been gradually materialized with abundant blessings from Mary, the Mother of God (Mater Dei), the patroness of the institution.
            What used to be an ugly duckling has now metamorphosed into a lovely swan. Indeed, MDC has gone far from what she was 25 years ago. From the original eight classrooms, the college has expanded extensively especially with the completion of her newest buildings—the Nursing and Related Arts Complex and the MDC Elementary Laboratory School. The increasing number of students, mostly from the neighboring towns necessitated an expansion project. The Information Technology Systems Complex was completed three years ago followed with the construction of the HRM Laboratory.
            Although the college has kept abreast with advancement in technology, she has managed to preserve her lush green surroundings. Behind the college’s unassuming facade a magnificent school campus meets the eye. Tall trees and flowering plants invite birds to build their nests. The quiet atmosphere which is really conducive to learning attracted balikbayan parents to send their fun-loving children to this college. MDC’s plain frontage is a complete contrast to the splendid college grounds behind the original front building. Equipped with state-of-the-art sports facilities such as a lawn & table tennis, basketball and volleyball courts, the school provides both students and teachers opportunities to have a relaxing exercise.
            Aside from her material resources, MDC can truly boast of her human resource powerhouse. Her faculty and staff are known to possess a perfect timbre of sternness and congeniality. MDC’s competent administrators assured the community that the college is manned towards the right direction. With her highly-competent members of the Board of Trustees, most of whom are priests and lay educators, the college is definitely in good hands.
            </p>
        </div>
    );
}
 
export default Home;
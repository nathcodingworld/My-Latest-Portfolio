
import { Accordion, AccordionItem,  AccordionItemButton, AccordionItemHeading,  AccordionItemPanel } from 'react-accessible-accordion'; 
import style from '@styles/Body.module.scss'


export default function Philosophy() {
 return (
    <div className={style.Philosophy}>
        <Accordion preExpanded={['a']}>
            <AccordionItem uuid="a" className={style.accitem} >
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className={style.PhilosophyHtitle}>
                            <h4> Why is my profession important </h4>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className={style.PhilosophyHcontent}> 
                    <p>Web development is an essential profession because it plays a vital role in shaping the digital landscape that we interact with daily. Websites serve as the primary means of communication for businesses, organizations, and individuals to connect with their intended audience and share information.</p>
                    </div> 
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={style.accitem} >
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className={style.PhilosophyHtitle}>
                            <h4> What do i think about web development industry </h4>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className={style.PhilosophyHcontent}> 
                    <p>For me, the web development industry is a dynamic and exciting field that is best suited for those passionate about technology and innovation. Personally, I enjoy programming and find that the web development industry provides ample opportunities to create amazing programs and projects. Moreover, I have noticed a rise in new technologies and frameworks, which not only makes it more accessible for beginners to enter the industry but also provides experienced developers with new opportunities to expand their skill set.</p>
                    </div> 
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={style.accitem} >
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className={style.PhilosophyHtitle}>
                            <h4> How do i Treat Other proffessional </h4>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className={style.PhilosophyHcontent}> 
                    <p>For the past few years, I have had a coworker in a different department. I always trust them and am honest with them. I treat them as a friend, but when it comes to professional work, I treat them as a professional and show respect for their expertise in their field. Communication is always necessary, so it is important to maintain good communication with them. This is essential for the success of any project</p>
                    </div> 
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={style.accitem} >
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className={style.PhilosophyHtitle}>
                            <h4> Which of my skill help me thrive in my work </h4>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className={style.PhilosophyHcontent}> 
                    <p>One of my key skills is fast learning. Over the past few months, I have worked with different technologies that I had little to no prior experience with, yet I was able to complete my tasks and deliver results accurately. Another skill of mine is being resourceful. When faced with a technology that I am not familiar with, I can find effective solutions in other ways. I have received positive feedback from my coworkers who are impressed with how I have completed tasks even without prior knowledge of the technology.</p>
                    </div> 
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </div>
 )
}
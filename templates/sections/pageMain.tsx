

import PageHead from '@templates/pageHead' 
import PageFoot from '@templates/pageFoot' 
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax' 
import FullBody from '@templates/fullbodyPicture'
import AboutRow from '@templates/layout/aboutRow'
import AboutDetail from '@templates/aboutDetail'
import Philosophy from '@templates/pilosophy'
import Works from '@basepath/templates/homepage/works'
import Refference from '@templates/refferences' 
import ContactForm from '@templates/contactForm'
import ContactRow from '../homepage/layout/contactRow'
import ContactDetail from '../homepage/contactDetail'
import { useRef } from 'react'
 

export default function PageMain({ }  ) {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const mainParalax = useRef<IParallax>(null)
   
    return (
        < >
            <Parallax pages={7} ref={mainParalax}>
                <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <PageHead paralax={mainParalax} />
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1, end: 1.4 }} style={{ ...alignCenter, justifyContent: 'flex-start', zIndex: '-10' }}>
                    <AboutRow content={false} >
                        <FullBody />
                    </AboutRow>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <AboutRow content={true} >
                        <AboutDetail />
                    </AboutRow>
                </ParallaxLayer>

                <ParallaxLayer offset={1.9} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <AboutRow content={true} >
                        <Philosophy />
                    </AboutRow>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 2.9, end: 3.2 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <Works /> 
                </ParallaxLayer> 

                <ParallaxLayer offset={4.2} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <Refference /> 
                </ParallaxLayer> 

                <ParallaxLayer sticky={{ start: 5.2, end: 6 }}>
                    <ContactRow >
                        <ContactDetail />
                        <ContactForm /> 
                    </ContactRow> 
                </ParallaxLayer> 

                <ParallaxLayer sticky={{ start: 6, end: 7 }} style={{ ...alignCenter, justifyContent: 'flex-end',  pointerEvents: 'none' }}>
                    <PageFoot paralax={mainParalax} />
                </ParallaxLayer> 
            </Parallax>
        </ >
    )
}


import PageHead from '@templates/pageHead' 
import PageFoot from '@templates/pageFoot' 
import { Parallax, ParallaxLayer } from '@react-spring/parallax' 
import FullBody from '@templates/fullbodyPicture'
import AboutRow from '@templates/layout/aboutRow'
import AboutDetail from '@templates/aboutDetail'
import Philosophy from '@templates/pilosophy'
import Works from '@basepath/templates/homepage/works'
import Refference from '@templates/refferences'
import Tests from '../homepage/test'

export default function PageMain() {
  const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        < >
            <Parallax pages={7}>
                <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <PageHead />
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

                <ParallaxLayer sticky={{ start: 5.2, end: 6 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <Refference /> 
                </ParallaxLayer> 

                <ParallaxLayer sticky={{ start: 6, end: 7 }} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <PageFoot />
                </ParallaxLayer> 
            </Parallax>
        </ >
    )
}
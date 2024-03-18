import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainContainer = styled.div`
    max-width:80vw;
    min-height:100vh;
    margin-left:20vw;
    // background:lightblue;
    padding:45px;
`

const Heading = styled.h1``

const Paragraph  =styled.p``

const StyledLink = styled(Link)``

const Heading2 = styled.h2``

const Heading3 = styled.h3``

const MainView = () => {
  return (
    <MainContainer>
        <Heading>Dataverse Documentation v. 6.1</Heading>
        <Paragraph>These documentation guides are for the 6.1 version of Dataverse. To find guides belonging to previous or future versions, <StyledLink>Dataverse Software Documentation Versions</StyledLink> has a list of all available versions.</Paragraph>

        <Heading2>How the Guides Are Organized</Heading2>
        <Paragraph>
        The guides are documentation that explain how to use Dataverse, which are divided into the following sections: User Guide, Installation Guide, Developer Guide, API Guide, Style Guide and Container Guide. The User Guide is further divided into primary activities: finding & using data, adding Datasets, administering dataverses or Datasets, and Dataset exploration/visualizations. Details on all of the above tasks can be found in the Users Guide. The Installation Guide is for people or organizations who want to host their own Dataverse. The Container Guide gives information on how to deploy Dataverse with containers. The Developer Guide contains instructions for people who want to contribute to the Open Source Dataverse project or who want to modify the code to suit their own needs. Finally, the API Guide is for Developers that work on other applications and are interested in connecting with Dataverse through our APIs.
        </Paragraph>

        <Heading2>Other Resources</Heading2>
        <Heading3>Dataverse Project Site</Heading3>
        <Paragraph>
        Additional information about the Dataverse Project itself including presentations, information about upcoming releases, data management and citation, and announcements can be found at <StyledLink>https://dataverse.org/</StyledLink>
        </Paragraph>

        <Heading3>User Group</Heading3>
        <Paragraph>As the user community grows we encourage people to shares ideas, ask questions, or offer suggestions for improvement. Go to <StyledLink>https://groups.google.com/group/dataverse-community</StyledLink> to register to our dataverse community group.

</Paragraph>

<Heading3>Follow Us on Twitter

</Heading3>

<Paragraph>For up to date news, information and developments, follow our twitter account: <StyledLink>https://twitter.com/dataverseorg</StyledLink>

</Paragraph>

<Heading3>Support</Heading3>

<Paragraph>

We maintain an email based support service that is free of charge. We attempt to respond within one business day to all questions and if it cannot be resolved immediately, we will let you know what to expect.

<br></br><br></br>

The support email address is <StyledLink>support@dataverse.org</StyledLink>.


</Paragraph>

<Heading3>Reporting Issues and Contributing

</Heading3>

<Paragraph>
Report bugs and add feature requests in <StyledLink>GitHub Issues</StyledLink> or use <StyledLink>GitHub pull requests</StyledLink>, if you have some code, scripts or documentation that you’d like to share. If you have a <b>security issue</b> to report, please email <StyledLink> security@dataverse.org</StyledLink>. See also <StyledLink>Reporting Security Issues</StyledLink>.



</Paragraph>
    </MainContainer>
  )
}

export default MainView
import styled from 'styled-components';

export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50px;
    margin: 2%;
    padding: 1%;
    box-shadow: 0px 1px 3px black;
    background-color: ${pr => pr.theme.white}
`
export const CardTitle = styled.div`
    display: flex;
    align-items: center;
    font-style: italic;
`
export const CardTitleP = styled.p`
    padding-left: 2%;
    text-transform: capitalize;
    color: grey;
`
export const CardAbilitiesDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const CardAbilitiesP = styled.p`
    padding-left: 2%;
    text-align: center;
    text-transform: capitalize;
`
export const CardStatsP = styled.p`
    text-align: center;
`
export const CardH2 = styled.h2`
    font-size: 2.2rem;
    text-transform: uppercase;
    font-style: normal;
`
export const CardH4 = styled.h4`
    font-size: 1.8rem;
    text-align: center;
`
export const Button = styled.button`
    border-radius: 5px;
    padding: 2%;
    margin: 2%;
`
export const Loading = styled.p`
    color: ${pr => pr.theme.loading};
`
export const Error = styled.p`
    color: red;
`
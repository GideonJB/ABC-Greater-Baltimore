import { styled } from 'frontity'

export const Category = styled.div`
    margin-bottom: 40px;

`

export const CategoryItems = styled.div`
    padding-left: 10px;
    font-size: .8em;

    p{
        line-height: 1;
        margin-bottom: 15px;
    }

`

export const CategoryTitle = styled.p`
    font-weight: 600;
    font-size: 1.3em;
    padding-bottom: 10px;
`

export const LeftColumn = styled.div`
    padding: 40px 30px 100px 30px;
    background-color: hsl(0 0% 70%);
    width: 35%;

    @media screen and (max-width: 1100px){
        width: 100%;
    }
`

export const Name = styled.h2`
    color: var(--colors-site-white);
`

export const NameBanner = styled.div`
    background-color: hsl(216 60% 46%);
    padding: 50px 0px 5px 0px;
    text-align: center;
`

export const ResumeMain = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 1100px){
        flex-direction: column;
    }
`

export const RightColumn = styled.div`
    width: 65%;
    padding: 40px 30px 100px 30px;

    ul{
        list-style-type: none;
        line-height: 1;
    }

    @media screen and (max-width: 1100px){
        width: 100%;
    }
`

export const Rule = styled.hr`
    margin: 40px 0px 5px 0px;
    border: 2px solid white;
    width: 100%;
`

export const Wrapper = styled.div`
    width: calc(var(--screen-width) - 150px);
    margin: 75px 0px 0px 150px;
    visibility: visible;

    @media screen and (max-width: 1100px){
        width: 100%;
        margin: 0 auto;
    }

    @media print{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0px;
        margin-top: -50px;
    }
`



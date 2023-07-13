import styled from 'styled-components'

export const NavStyle= styled.nav`

    display: flex;
    box-shadow: 0 2px 4px rgba(0,0,0,.3);
    user-select: none;
    a{
        color: inherit;
    }
    .nav-items{
        display: flex;
        justify-content: center;
        align-items: center;

        &.showNavbar{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
            margin: 15px;
            width: 100%;
        }
        & .nav-link{
            opacity: 0.8;
            margin-right: 1rem;
            padding: 0.15rem 0.35rem;
            border: 1px solid transparent;
            border-radius: 2px;
            transition: all 0.2s ease;

            &:hover{
                border:1px solid #eee;

            }
            &.active{
                background-color: #eee;
                color: #000;
                transition: all 0.2s ease;
            }
        }
    }
    
    
    &.showNavbar{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
`
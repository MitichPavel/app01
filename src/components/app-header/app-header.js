import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const Indicator = styled.div`
    margin: 0px 0 0 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 3px solid ${props => props.online ? '#e8d8d8' : '#efefef'};
    background-color: ${props => props.online ? '#aeaeae' : 'white'};
`
const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`
const AppHeader = ({liked, allPosts}) => {
    return (
        <Header>
            <div className="d-flex">
                <h1>Pavlo Mitich</h1>
                <Indicator online/>
            </div>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}
export default AppHeader;
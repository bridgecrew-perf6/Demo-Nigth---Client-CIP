import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CIPLogo from '../../Img/cip-logo.png'
import './style.css'

const CentralContainer = styled.div`
    width: 100%;
`

const NavbarMenu = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


const ImgLogo = styled.img `
    width: 150px;
`


export default function ComponentMenu () {
    const navigate = useNavigate ();

    const handleSubmit = async (e) => {
        e.preventDefault ();
        navigate("/")
    }

    return (
        <>
        <CentralContainer>
            <NavbarMenu>
                <ImgLogo src= {CIPLogo} alt="LogoCip" />
                <div className="dropdown">
                    <button className="dropbtn">CLIENTE</button>
                    <div className="dropdown-content">
                        <a href="/">Cadastrar</a>
                        <a href="/">Consultar</a>
                    </div>
                    {/* <div>
                        <button className="dropbtn2">CONTA CORRENTE</button>
                    </div> */}
                </div>
                
            </NavbarMenu>
        </CentralContainer>
            

        </>
    )
}
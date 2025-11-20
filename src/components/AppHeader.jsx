// AppHeader.jsx
import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FiSearch, FiX } from "react-icons/fi"; // можно любую иконку

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background: #fff;
  box-shadow: 0 1px 0 rgba(0,0,0,0.06);
  position: relative;
  z-index: 10;
`;

/* Левая часть: логотип + иконка поиска */
const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: 0;
`;

/* Контейнер для иконки поиска (позиционируем относительно для появления input) */
const SearchWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

/* Поле поиска: позиционируется абсолютно и "разворачивается" слева направо */
const SearchInput = styled.input`
  position: absolute;
  left: 36px; /* смещение от иконки */
  width: 0;
  opacity: 0;
  transform-origin: left center;
  padding: 8px 12px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  transition: width 280ms cubic-bezier(.2,.9,.3,1), opacity 200ms;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  outline: none;
  font-size: 14px;
  background: #fff;

  ${props => props.open && css`
    width: 280px; /* желаемая ширина открытого инпута */
    opacity: 1;
  `}

  /* мобильная адаптация */
  @media (max-width: 560px) {
    ${props => props.open && css`
      width: 180px;
    `}
  }
`;

/* Кнопка закрытия (крестик) */
const CloseBtn = styled.button`
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  padding: 4px;
  display: ${props => props.show ? "block" : "none"};
  cursor: pointer;
`;

/* Правая часть: навигация, контакты, кнопка */
const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-left: auto;
  transition: transform 320ms cubic-bezier(.2,.9,.3,1), opacity 220ms;
  transform: translateX(0);
  opacity: 1;
  pointer-events: auto;
  white-space: nowrap;

  ${props => props.hidden && css`
    transform: translateX(110%); /* уезжает вправо */
    opacity: 0;
    pointer-events: none;
  `}

  /* чтобы при анимации ничего не вылезало за пределы хедера */
  will-change: transform, opacity;
`;

/* Пример элементов внутри правой группы */
const NavItem = styled.div`
  color: #333;
  font-size: 15px;
`;

const Contact = styled.div`
  color: #666;
  font-size: 13px;
  text-align: right;
`;

const CTA = styled.button`
  background: #00a79d;
  color: #fff;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

/* Логотип пример */
const Logo = styled.div`
  display:flex;
  align-items:center;
  font-weight:700;
`;

export default function AppHeader() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [open]);

  // Закрытие по клику вне
  useEffect(() => {
    function onDocClick(e) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Закрытие по Esc
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
      <HeaderWrap ref={wrapRef}>
        <LeftGroup>
          <Logo>АКАДЕМИЯ ПРОФИ</Logo>

          <SearchWrap>
            <button
                aria-expanded={open}
                aria-label={open ? "Закрыть поиск" : "Открыть поиск"}
                onClick={() => setOpen(v => !v)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
            >
              {open ? <FiX size={18} /> : <FiSearch size={18} />}
            </button>

            <SearchInput
                ref={inputRef}
                open={open}
                placeholder="Поиск по сайту..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    // обработка поиска
                    console.log("search:", e.currentTarget.value);
                  }
                }}
            />

          </SearchWrap>
        </LeftGroup>

        <RightGroup hidden={open}>
          <NavItem>О нас ▾</NavItem>
          <NavItem>Обучение ▾</NavItem>
          <NavItem>Консалтинг ▾</NavItem>

          <div style={{display: "flex", flexDirection: "column"}}>
            <Contact>8 (800) 600-63-30</Contact>
            <Contact>info@akademiaprofi.ru</Contact>
          </div>

          <CTA>Оставить заявку</CTA>
        </RightGroup>
      </HeaderWrap>
  );
}

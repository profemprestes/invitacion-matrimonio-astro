/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as createAstro, e as addAttribute, f as renderHead, g as renderSlot } from '../chunks/astro/server_DmXobP94.mjs';
import 'kleur/colors';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import 'clsx';
import { useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, Input, RadioGroup, Radio, Button, Autocomplete, AutocompleteItem, Card } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import fs from 'fs';
import path from 'path';
export { renderers } from '../renderers.mjs';

function Loader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1e3);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: loading ? /* @__PURE__ */ jsx(
    "div",
    {
      id: "loader",
      className: "flex z-50 fixed top-0 left-0 w-full h-full bg-white  items-center justify-center",
      children: /* @__PURE__ */ jsx("div", { className: "max-w-lg", children: /* @__PURE__ */ jsx("img", { className: "w-28 h-auto", src: "/love-heart.gif" }) })
    }
  ) : null });
}

const ControlMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const handlePlayMusic = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    audioRef.current.volume = 0.2;
  };
  const handleStop = () => {
    if (!isPlaying) {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("audio", { ref: audioRef, loop: true, children: /* @__PURE__ */ jsx("source", { src: "/cancion-fondo.mp3", type: "audio/mpeg" }) }),
    /* @__PURE__ */ jsx("button", { className: "btn-music m-2 font-medium shadow-md rounded-3xl py-3 px-10 bg-color01 text-white", onClick: handlePlayMusic, children: /* @__PURE__ */ jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "icon icon-tabler icons-tabler-outline icon-tabler-music-heart",
        children: [
          /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M9 17v-13h10v7"
            }
          ),
          /* @__PURE__ */ jsx("path", { d: "M9 8h10" }),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("button", { className: "btn-music m-2 font-medium shadow-md rounded-3xl py-3 px-10 bg-color01 text-white", onClick: handleStop, children: /* @__PURE__ */ jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#ffffff",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "icon icon-tabler icons-tabler-outline icon-tabler-music-cancel",
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
            }
          ),
          /* @__PURE__ */ jsx("path", { d: "M9 17v-13h10v8" }),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M9 8h10"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
            }
          ),
          /* @__PURE__ */ jsx("path", { d: "M17 21l4 -4" })
        ]
      }
    ) })
  ] });
};

const $$Intro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main id="landing-intro" data-astro-cid-oftltkt7> <section class="max-w-[650px] text-center animate-blurred-fade-in" data-astro-cid-oftltkt7> <h1 style="line-height: 45px;" class="text-center font-medium font-parisienne text-[#B97600] text-[65px] desktop:text-[50px]" data-astro-cid-oftltkt7>
¡Celebra conmigo!
</h1> <p class="text-[#6F6F6E] mt-4 desktop:text-2xl text-lg" data-astro-cid-oftltkt7>
Quiero que seas parte de mi primer cumpleaños, será especial contigo
</p> <div class="desktop:mt-5 mt-3" data-astro-cid-oftltkt7> ${renderComponent($$result, "ControlMusic", ControlMusic, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ControlMusic.jsx", "client:component-export": "default", "data-astro-cid-oftltkt7": true })} </div> </section> </main> `;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/sections/Intro.astro", void 0);

const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/node_modules/.pnpm/astro@4.16.18_rollup@4.40.0_typescript@5.8.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Invitación para el matrimonio de Dahiana y Johan"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Loader", Loader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Loader.jsx", "client:component-export": "default" })} ${renderComponent($$result, "Intro", $$Intro, {})} ${renderSlot($$result, $$slots["default"])}   </body> </html>`;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/layouts/Layout.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-shwxrd6l> <img src="/hero1.svg" id="parrallax-hero" alt="hero-parallax" data-astro-cid-shwxrd6l> </div> <section class="greater-desktop:h-screen desktop:h-[670px]  h-[670px] hero-section desktop:w-full w-full flex justify-center items-center bg-fixed bg-hero-pattern bg-cover bg-no-repeat bg-center" data-astro-cid-shwxrd6l> <div class="info-hero z-50 flex flex-col justify-center items-center absolute text-center mx-auto greater-desktop:max-w-3xl desktop:max-w-xl  max-w-80 h-[670px]" data-astro-cid-shwxrd6l> <div data-astro-cid-shwxrd6l> <span class="date-hero w-full table text-2xl desktop:text-xl  greater-desktop:text-2xl text-color02 mb-12 font-rubik font-semibold" data-astro-cid-shwxrd6l>
10.05.2025
</span> <h1 class="married-hero   custom-hero border-b-[1px] pb-8 border-b-white text-6xl greater-desktop:text-8xl text-color02 font-parisienne flex flex-col" data-astro-cid-shwxrd6l>
Galia
<span data-astro-cid-shwxrd6l> & </span>
Mi Cumpleaños
</h1> <div class="text-center flex justify-center items-center flex-col mt-7 gap-5" data-astro-cid-shwxrd6l> <img src="/mark_open.svg" class="w-10" data-astro-cid-shwxrd6l> <p class="text-xl greater-desktop:text-2xl font-rubik text-color02" data-astro-cid-shwxrd6l>
Galia, me encantaría que vinieras a celebrar mi primer año. ¡Será especial contigo!
</p> <img src="/mark_close.svg" class="w-10" data-astro-cid-shwxrd6l> </div> </div> <div class="flex justify-center mt-5 items-center" data-astro-cid-shwxrd6l> <img src="/arrow_down.gif" class="w-14 desktop:w-20" alt="" data-astro-cid-shwxrd6l> </div> </div> </section> `;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/sections/Hero.astro", void 0);

const $$Divider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="divider" data-astro-cid-e4yecxcx></div> `;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/components/Divider.astro", void 0);

const $$Astro$2 = createAstro();
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Title;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="font-parisienne desktop:text-6xl text-color01 text-5xl phone:text-5xl text-center"> ${title} </h2>`;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/components/Title.astro", void 0);

const $$Countdown = createComponent(($$result, $$props, $$slots) => {
  const TIMESTAMP_END = (/* @__PURE__ */ new Date("2025-05-10")).getTime();
  return renderTemplate`${maybeRenderHead()}<section class="max-w-6xl desktop:px-16 pt-20 pb-10 text-center mx-auto flex flex-col items-center justify-center"> ${renderComponent($$result, "Title", $$Title, { "title": "Falta" })} <div${addAttribute(TIMESTAMP_END, "data-date")} class="flex flex-row mt-5"> <div class="border-r-[1px] flex flex-col px-5 border-[#6F6F6E]"> <span data-days class="text-[#89713E] text-4xl desktop:text-5xl">
00
</span> <span class="text-[#6F6F6E] desktop:text-[25px] "> DIAS </span> </div> <div class="border-r-[1px] flex flex-col px-5 border-[#6F6F6E]"> <span data-hours class="text-[#89713E] text-4xl desktop:text-5xl">
00
</span> <span class="text-[#6F6F6E] desktop:text-[25px]"> HS </span> </div> <div class="border-r-[1px] flex flex-col px-5 border-[#6F6F6E]"> <span data-minutes class="text-[#89713E] text-4xl desktop:text-5xl">00
</span> <span class="text-[#6F6F6E] desktop:text-[25px]"> MIN </span> </div> <div class="px-5 flex flex-col"> <span data-seconds class="text-[#89713E] text-4xl desktop:text-5xl">
00
</span> <span class="text-[#6F6F6E] desktop:text-[25px]"> SEG </span> </div> </div> ${renderComponent($$result, "Divider", $$Divider, {})} </section> `;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/sections/Countdown.astro", void 0);

const CSV_Datos_URL = path.resolve("G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/data/Datos - Datos.csv");
const CSV_Confirmacion_URL = path.resolve("G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/data/Datos - Confirmacion.csv");
function AsistenciaModal({ type }) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm();
  const [send, setSend] = useState(false);
  const [asistenciaCheck, setAsistenciaCheck] = useState("");
  const [invitados, setInvitados] = useState([]);
  const [confirmaciones, setConfirmaciones] = useState([]);
  const [autorizado, setAutorizado] = useState(null);
  const [validando, setValidando] = useState(false);
  useEffect(() => {
    const cargarDatosCSV = () => {
      fs.readFile(CSV_Datos_URL, "utf8", (err, data) => {
        if (err) {
          console.error("Error al leer Datos.csv", err);
          return;
        }
        const invitadosData = data.trim().split("\n").slice(1).map((line) => {
          const [celular, nombre, cantidadInvitaciones] = line.split(",");
          return { celular: celular.trim(), nombre: nombre.trim(), cantidad: Number(cantidadInvitaciones) };
        });
        setInvitados(invitadosData);
      });
      fs.readFile(CSV_Confirmacion_URL, "utf8", (err, data) => {
        if (err) {
          console.error("Error al leer Confirmacion.csv", err);
          return;
        }
        const confirmacionesData = data.trim().split("\n").slice(1).map((line) => {
          const [celular, cantidadConfirmada] = line.split(",");
          return { celular: celular.trim(), cantidadConfirmada: Number(cantidadConfirmada) };
        });
        setConfirmaciones(confirmacionesData);
      });
    };
    cargarDatosCSV();
  }, []);
  const validarCelular = (numero) => {
    const encontrado = invitados.find((i) => i.celular === numero);
    if (encontrado) {
      const cantidadConfirmada = confirmaciones.find((c) => c.celular === numero)?.cantidadConfirmada || 0;
      if (cantidadConfirmada > 0 && cantidadConfirmada <= encontrado.cantidad) {
        setAutorizado(encontrado);
      } else {
        setAutorizado(false);
      }
    } else {
      setAutorizado(false);
    }
  };
  const handleGuardarForm = handleSubmit(async (data) => {
    if (!autorizado) {
      return;
    }
    const response = await fetch("https://script.google.com/a/macros/docente.ceibal.edu.uy/s/AKfycbyVSErsOwGghYWkTH0Sr5m96G5kr3VYAik-XsA5hqFyNJkSWh6pskw_WYQLmZbxVxbXTA/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        celular: data.T_NroDocumento,
        cantidad: autorizado.cantidad
        // Cantidad confirmada
      })
    });
    const res = await response.json();
    if (res.success) {
      reset();
      setSend(true);
      setAutorizado(null);
    }
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: onOpen, className: "w-[280px] desktop:w-[200px] mx-auto bg-color01 text-color02 py-3 rounded-3xl", children: "Confirmar Asistencia" }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        backdrop: "blur",
        isOpen,
        onOpenChange,
        placement: "center",
        size: "xl",
        isDismissable: false,
        isKeyboardDismissDisabled: true,
        className: "p-8",
        children: /* @__PURE__ */ jsx(ModalContent, { children: (onClose2) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(ModalHeader, { className: "font-parisienne text-color01 font-light text-5xl text-center my-4 flex-col gap-1", children: [
            "¿Asistís a la ",
            type,
            "?"
          ] }),
          /* @__PURE__ */ jsx(ModalBody, { children: !send ? /* @__PURE__ */ jsx("form", { onSubmit: handleGuardarForm, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                ...register("T_NroDocumento", {
                  required: "Campo requerido",
                  onBlur: (e) => validarCelular(e.target.value)
                }),
                label: "Celular",
                placeholder: "Ingresá tu número (ej. 097338241)",
                variant: "bordered"
              }
            ),
            autorizado === false && /* @__PURE__ */ jsx("span", { className: "text-red-500 text-xs text-center", children: "Este número no está en la lista de invitados o la cantidad confirmada no es válida." }),
            autorizado && /* @__PURE__ */ jsxs("p", { className: "text-green-600 text-sm text-center", children: [
              "¡Hola ",
              autorizado.nombre,
              "! Te encontramos en la lista 🎉"
            ] }),
            autorizado && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  ...register("T_Nombres", { required: "Campo requerido" }),
                  label: "Nombre completo",
                  placeholder: "Ej: Juan Pérez",
                  variant: "bordered"
                }
              ),
              /* @__PURE__ */ jsxs(
                RadioGroup,
                {
                  color: "warning",
                  size: "lg",
                  orientation: "horizontal",
                  value: asistenciaCheck,
                  onValueChange: setAsistenciaCheck,
                  children: [
                    /* @__PURE__ */ jsx(Radio, { value: "SI", children: "¡Sí, confirmo!" }),
                    /* @__PURE__ */ jsx(Radio, { value: "NO", children: "No puedo :(" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  type: "submit",
                  color: "warning",
                  isLoading: isSubmitting,
                  className: "w-[280px] desktop:w-[200px] mx-auto rounded-3xl",
                  children: "Enviar"
                }
              )
            ] })
          ] }) }) : /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xl font-rubik", children: "¡Gracias por confirmar! 🎉" }),
            /* @__PURE__ */ jsx(Button, { className: "mt-5 bg-color01 text-color02 py-3 rounded-3xl", onClick: () => {
              reset();
              setSend(false);
              setAutorizado(null);
              onClose2();
            }, children: "Cerrar" })
          ] }) })
        ] }) })
      }
    )
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$PrincipalDate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="max-w-6xl desktop:mx-auto mx-4 text-center flex flex-col items-center gap-12" data-astro-cid-yql3tenq> <div class="w-full" data-astro-cid-yql3tenq> <img src="/daisy.svg" class="w-32 mx-auto" alt="icono margarita" data-astro-cid-yql3tenq> <div class="title-pd py-4" data-astro-cid-yql3tenq> <h3 class="font-parisienne text-5xl text-color01" data-astro-cid-yql3tenq>\xA1Galia cumple 1 a\xF1ito!</h3> </div> <ul data-astro-cid-yql3tenq> <li data-astro-cid-yql3tenq> <p class="text-[28px] text-[#6F6F6E] font-medium" data-astro-cid-yql3tenq>Cu\xE1ndo</p> <span class="text-[20px] font-normal text-[#C6C6C5]" data-astro-cid-yql3tenq>\nS\xE1bado 10 de mayo de 2025 - 15:00 hs\n</span> <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MXN1cmxrYWFpM2Zia3VtNzBncGo4cHZiNW0gbXByZXN0ZXNAZG9jZW50ZS5jZWliYWwuZWR1LnV5&tmsrc=mprestes%40docente.ceibal.edu.uy" target="_blank" class="bg-color01 text-color02 py-3 rounded-3xl" data-astro-cid-yql3tenq>\nAgendar\n</a> </li> <li data-astro-cid-yql3tenq> <p class="text-[28px] text-[#6F6F6E] font-medium" data-astro-cid-yql3tenq>D\xF3nde</p> <span class="text-[20px] font-normal text-[#C6C6C5]" data-astro-cid-yql3tenq>\nBenjamin Vizquerra 246, Chancay\n</span> <a href="https://maps.app.goo.gl/nB1U1MJTKiEXN33A6" target="_blank" class="bg-color01 text-color02 py-3 rounded-3xl" data-astro-cid-yql3tenq>\n\xBFC\xF3mo llegar?\n</a> </li> <li data-astro-cid-yql3tenq> <p class="text-[28px] text-[#6F6F6E] font-medium" data-astro-cid-yql3tenq>Confirmar asistencia</p> ', " </li> </ul> </div> </section> ", ' <script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" async defer><\/script> '])), maybeRenderHead(), renderComponent($$result, "AsistenciaModal", AsistenciaModal, { "type": "cumplea\xF1os", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/AsistenciaModal.jsx", "client:component-export": "default", "data-astro-cid-yql3tenq": true }), renderComponent($$result, "Divider", $$Divider, { "data-astro-cid-yql3tenq": true }));
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/sections/PrincipalDate.astro", void 0);

const $$Astro$1 = createAstro();
const $$MessageCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MessageCard;
  const { person, image, message } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-sm w-full shadow-lg desktop:max-w-lg desktop:flex"> <div class="h-48 desktop:h-auto desktop:w-48 flex-none bg-cover rounded-t desktop:rounded-t-none desktop:rounded-l text-center overflow-hidden"${addAttribute(`background-image: url('/photos/${image} ')`, "style")} title="Woman holding a mug"></div> <div class="border-r border-b border-l border-gray-400 desktop:border-l-0 desktop:border-t desktop:border-gray-400 bg-white rounded-b desktop:rounded-b-none desktop:rounded-r p-4 flex flex-col justify-between leading-normal"> <div class="mb-8"> <p class="text-sm text-gray-600 flex items-center">
♥ Solo para ti
</p> <div class="text-gray-900 font-bold text-xl mb-2">
Mensaje de ${person} </div> <p class="text-gray-700 text-base"> ${message} </p> </div> </div> </div>`;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/components/MessageCard.astro", void 0);

const $$Message = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="max-w-[1140px] phone:w-full phone:px-2 mx-auto mb-12 mt-12 desktop:mb-14 desktop:mt-24 text-color01 flex gap-3 justify-center items-center flex-col"> ${renderComponent($$result, "Title", $$Title, { "title": "Mensaje de los novios" })} <span class="font-rubik desktop:text-xl text-center font-extralight text-gray-400">
Un minuto, un segundo, un instante que queda en la eternidad
</span> <img src="/heard-message.gif" class="w-28 mx-auto" title="gift de corazón"> </div> <div class="max-w-[1140px] flex flex-row flex-wrap gap-8 desktop:gap-4 mx-auto justify-center items-center"> ${renderComponent($$result, "MessageCard", $$MessageCard, { "person": "Dahiana", "message": `Queremos compartir con cada uno de ustedes un d\xEDa muy especial para nosotros, una de las decisiones m\xE1s importantes de nuestra vida. Nos vamos a sentir afortunados de estar rodeados de nuestros seres queridos y amistades, con quienes hemos tenido la oportunidad de compartir momentos inolvidables. Esperamos que nos puedan acompa\xF1ar y pasen una noche memorable.`, "image": "novia.jpg" })} ${renderComponent($$result, "MessageCard", $$MessageCard, { "person": "Johan", "message": `
Cada minuto es importante y especial, como aquellos que hemos vivido en alg\xFAn momento, y este no tiene por qu\xE9 ser diferente. Pensamos en ti y en c\xF3mo formas parte de nuestra historia. Por ello, espero que nos puedas acompa\xF1ar en un d\xEDa muy especial para nosotros y tener, una vez m\xE1s, la oportunidad de pasar un momento de dicha y felicidad ante una decisi\xF3n tan importante. \xA1Te esperamos!
        `, "image": "novio.jpg" })} </div> ${renderComponent($$result, "Divider", $$Divider, {})} </section>`;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/sections/Message.astro", void 0);

const generosmusicales = [
  "Pop",
  "Cumbia",
  "Salsa",
  "Bolero",
  "Valse Criollo",
  "Marinera",
  "Reggaetón",
  "Jazz",
  "Soul",
  "R&B",
  "Blues",
  "Otros"
];
function MusicaModal() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [error, setError] = useState("");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [send, setSend] = useState(false);
  const handleGuardarForm = handleSubmit(async (data) => {
    const datos = {
      ...data
    };
    const response = await fetch("https://eae-api.pedagogicos.pe/api/recomendacionmusica", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    });
    const res = await response.json();
    if (res.status === 201) {
      reset();
      setSend(true);
      setError("");
    } else {
      setError(res.message);
    }
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: onOpen, className: "bg-color01 min-w-52 max-w-52 text-color02 py-3 rounded-3xl", children: "Sugerir canción" }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        backdrop: "blur",
        isOpen,
        onOpenChange,
        placement: "center",
        size: "xl",
        isDismissable: false,
        isKeyboardDismissDisabled: true,
        className: "p-8",
        children: /* @__PURE__ */ jsx(ModalContent, { children: (onClose2) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(ModalHeader, { className: "flex \r\n                            font-parisienne\r\n                            text-color01\r\n                            font-light\r\n                            text-5xl\r\n                            phone:text-[34px]\r\n                            p-0\r\n                            desktop:text-5xl\r\n                            text-center\r\n                            my-4\r\n                            flex-col gap-1", children: "Sugerir Canción" }),
          /* @__PURE__ */ jsx(ModalBody, { children: !send ? /* @__PURE__ */ jsxs("form", { onSubmit: handleGuardarForm, children: [
            error && /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("span", { className: "text-red-500 text-center text-xs", children: error }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col mt-5 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  Autocomplete,
                  {
                    ...register("T_Categoria", {
                      required: {
                        value: true,
                        message: "Campo es requerido"
                      }
                    }),
                    variant: "bordered",
                    defaultItems: generosmusicales,
                    labelPlacement: "inside",
                    label: "Selecciona un género musical",
                    className: "max-w-full",
                    children: generosmusicales.map((item, index) => /* @__PURE__ */ jsx(AutocompleteItem, { children: item }, index))
                  }
                ),
                errors.T_Categoria && /* @__PURE__ */ jsx("span", { className: "text-red-500 text-xs", children: errors.T_Categoria.message })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    ...register("T_Cantante", {
                      required: {
                        value: true,
                        message: "Campo es requerido"
                      }
                    }),
                    label: "Cantante/Grupo",
                    placeholder: "Ingresa la Canción o Grupo",
                    variant: "bordered"
                  }
                ),
                errors.T_Cantante && /* @__PURE__ */ jsx("span", { className: "text-red-500 text-xs", children: errors.T_Cantante.message })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    ...register("T_Nombre_Cancion", {
                      required: {
                        value: true,
                        message: "Campo es requerido"
                      }
                    }),
                    label: "Canción",
                    placeholder: "Ingresa la canción",
                    variant: "bordered"
                  }
                ),
                errors.T_Nombre_Cancion && /* @__PURE__ */ jsx("span", { className: "text-red-500 text-xs", children: errors.T_Nombre_Cancion.message })
              ] }),
              isSubmitting ? /* @__PURE__ */ jsx("button", { disabled: true, className: "bg-color01 disabled:bg-color03 text-color02 py-3  w-[280px] mx-auto desktop:w-[200px] rounded-3xl", children: "Enviando .." }) : /* @__PURE__ */ jsx("button", { className: "bg-color01 text-color02 py-3  w-[280px] mx-auto desktop:w-[200px] rounded-3xl", children: "Sugerir canción" })
            ] })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-5 items-center justify-center", children: [
              /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-28 text-color01 ", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" }) }),
              /* @__PURE__ */ jsx("p", { className: "  font-rubik text-center  text-xl ", children: "¡Gracias por tu recomendación!" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  reset();
                  onClose2();
                  setSend(false);
                },
                className: "bg-color01 mt-5 text-color02 py-3  w-[280px] mx-auto desktop:w-[200px] rounded-3xl",
                children: "Salir"
              }
            )
          ] }) })
        ] }) })
      }
    )
  ] });
}

function DressCodeModal() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: onOpen, className: "bg-color01 min-w-52 max-w-52 text-color02 py-3 rounded-3xl", children: "Ver más" }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        backdrop: "blur",
        isOpen,
        onOpenChange,
        placement: "center",
        isDismissable: false,
        isKeyboardDismissDisabled: true,
        size: "xl",
        className: "p-8",
        children: /* @__PURE__ */ jsx(ModalContent, { children: (onClose2) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(ModalHeader, { className: "flex \r\n                            font-parisienne\r\n                            text-color01\r\n                            font-light\r\n                            text-5xl\r\n                            phone:text-[34px]\r\n                            p-0\r\n                            desktop:text-5xl\r\n                            text-center\r\n                            my-4\r\n                            flex-col gap-1", children: "Dress Code" }),
          /* @__PURE__ */ jsx(ModalBody, { children: /* @__PURE__ */ jsxs("div", { className: " text-sm flex flex-col  gap-4 ", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold font-rubik", children: "Queridos invitados," }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 font-rubik", children: [
              /* @__PURE__ */ jsx("span", { children: "Para hacer de nuestro día especial un evento aún más memorable, les solicitamos amablemente que sigan el siguiente código de vestimenta:" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Hombres:" }),
              /* @__PURE__ */ jsx("span", { children: "Traje Formal: Se recomienda el uso de traje oscuro con camisa y corbata." }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Mujeres:" }),
              /* @__PURE__ */ jsx("span", { children: "Vestido de Cóctel o Gala: Vestidos largos o cortos elegantes son bienvenidos." }),
              /* @__PURE__ */ jsx("span", { children: "Color Sugerido: Evitar el blanco y perla." }),
              /* @__PURE__ */ jsx("span", { children: "Agradecemos de antemano su comprensión y colaboración para que todos luzcan espectaculares en esta ocasión tan especial." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-1 justify-end items-end ", children: /* @__PURE__ */ jsx("span", { className: "font-parisienne text-color01 text-lg font-bold", children: "Johan y Dahiana" }) })
          ] }) })
        ] }) })
      }
    )
  ] });
}

function TipsModal() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const title = {
    fontWeight: "bold",
    fontSize: "1rem"
  };
  const list = {
    display: "flex",
    gap: "8px",
    marginLeft: "15px",
    flexDirection: "column"
  };
  const li = {
    display: "flex",
    gap: "3px",
    fontSize: "0.8rem",
    flexDirection: "column"
  };
  const [error, setError] = useState("");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [send, setSend] = useState(false);
  const [asistenciaCheck, setAsistenciaCheck] = useState("");
  handleSubmit(async (data) => {
    if (asistenciaCheck === "") {
      setError("Debes seleccionar una opción de asistencia");
      return;
    }
    const datos = {
      ...data,
      Flag_Asistencia: asistenciaCheck,
      T_Tipo_Sede: type
    };
    const response = await fetch("http://127.0.0.1:8000/api/asistencia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 12|SjaqxYBCTstwlZndGdS7IKUjTW7nKnZRayAVsKzA4fcc3c0c"
      },
      body: JSON.stringify(datos)
    });
    const res = await response.json();
    if (res.status === 201) {
      reset();
      setSend(true);
      setError("");
    } else {
      setError(res.message);
    }
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: onOpen, className: "bg-color01 min-w-52 max-w-52 text-color02 py-3 rounded-3xl", children: "+ Info" }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        backdrop: "blur",
        isOpen,
        isDismissable: false,
        isKeyboardDismissDisabled: true,
        onOpenChange,
        placement: "center",
        size: "xl",
        className: "p-8 phone:max-h-[60vh] max-h-[60vh] desktop:max-h-[90vh] overflow-y-auto",
        children: /* @__PURE__ */ jsx(ModalContent, { children: (onClose2) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(ModalHeader, { className: "flex \r\n                            font-parisienne\r\n                            text-color01\r\n                            font-light\r\n                            text-5xl\r\n                            phone:text-[34px]\r\n                            p-0\r\n                            desktop:text-5xl\r\n\r\n                            text-center\r\n                            my-4\r\n                            flex-col gap-1", children: "Tips y Notas" }),
          /* @__PURE__ */ jsxs(ModalBody, { className: "font-rubik", children: [
            /* @__PURE__ */ jsx("h3", { style: title, children: "Actividades y Horarios" }),
            /* @__PURE__ */ jsxs("ul", { style: list, children: [
              /* @__PURE__ */ jsxs("li", { style: li, children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Ceremonia Religiosa:" }),
                /* @__PURE__ */ jsx("span", { children: "   Comienza puntualmente a las 15:00 horas, así que por favor, llega al menos 15 minutos antes." })
              ] }),
              /* @__PURE__ */ jsxs("li", { style: li, children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Ceremonia Civil:" }),
                /* @__PURE__ */ jsx("span", { children: "La ceremonia civil será a las 16:30 horas." })
              ] }),
              /* @__PURE__ */ jsxs("li", { style: li, children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Fiesta:" }),
                /* @__PURE__ */ jsx("span", { children: "Se realizará una vez culmine la ceremonia Civil. " })
              ] })
            ] }),
            /* @__PURE__ */ jsx("h3", { style: title, children: "Comidas y Bebidas" }),
            /* @__PURE__ */ jsx("ul", { style: list, children: /* @__PURE__ */ jsxs("li", { style: li, children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Menú:" }),
              /* @__PURE__ */ jsx("span", { children: "Esperamos que disfrutes de la cena que hemos preparado para ti." })
            ] }) }),
            /* @__PURE__ */ jsx("h3", { style: title, children: "Reglas" }),
            /* @__PURE__ */ jsxs("ul", { style: list, children: [
              /* @__PURE__ */ jsxs("li", { style: li, children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Solo Adultos:" }),
                /* @__PURE__ */ jsx("span", { children: "Para garantizar que todos nuestros invitados puedan disfrutar plenamente de la celebración, amablemente solicitamos que este sea un evento para adultos. Apreciamos mucho su comprensión y apoyo en esta decisión." })
              ] }),
              /* @__PURE__ */ jsxs("li", { style: li, children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Fotografía:" }),
                /* @__PURE__ */ jsx("span", { children: "Te pedimos que evites tomar fotografias que puedan interferir con el desarrollo de la ceremonia, luego de ello, siéntete libre de tomar las fotos que desees. No olvides etiquetarnos en tus redes sociales con el hashtag #JohanYDahiana" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("h3", { style: title, children: "Regalos" }),
            /* @__PURE__ */ jsxs("ul", { style: list, children: [
              /* @__PURE__ */ jsx("li", { style: li, children: "Estamos muy emocionados de celebrar nuestro matrimonio con ustedes y estamos profundamente agradecidos por su amor y apoyo. Si desean honrarnos con un regalo, les agradecemos de antemano por su generosidad." }),
              /* @__PURE__ */ jsxs("li", { style: li, children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Dahiana:" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "INTERBANK: 8983305997546",
                  /* @__PURE__ */ jsx("br", {}),
                  "CCI:  00389801330599754645"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("li", { style: li, children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Johan:" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "BCP: 29519490244091",
                  /* @__PURE__ */ jsx("br", {}),
                  "CCI:  00229511949024409146"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-1 justify-end items-end ", children: /* @__PURE__ */ jsx("span", { className: "font-parisienne text-color01 text-lg font-bold", children: "Johan y Dahiana" }) })
          ] })
        ] }) })
      }
    )
  ] });
}

function CardParty({
  title,
  guid,
  description,
  icon
}) {
  return /* @__PURE__ */ jsxs(Card, { shadow: "md", className: "p-0 py-10 max-w-sm  w-full desktop:max-w-72 text-center flex items-center justify-center", children: [
    /* @__PURE__ */ jsx("p", { className: "font-semibold  text-2xl text-color03 ", children: title }),
    /* @__PURE__ */ jsx("img", { src: `/${icon}.gif`, className: "w-24 mt-6", alt: `Icono de sección fiesta - ${icon}` }),
    /* @__PURE__ */ jsx("span", { className: "h-32 p-6  text-gray-400 font-medium flex justify-center items-center", children: description }),
    guid == 1 ? /* @__PURE__ */ jsx(MusicaModal, {}) : guid == 2 ? /* @__PURE__ */ jsx(DressCodeModal, {}) : /* @__PURE__ */ jsx(TipsModal, {})
  ] });
}

const $$Party = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="max-w-[1140px] phone:w-full phone:px-2 mx-auto mb-12 mt-12 desktop:mb-14 desktop:mt-24 text-color01 flex gap-3 justify-center items-center flex-col"> ${renderComponent($$result, "Title", $$Title, { "title": "Fiesta" })} <span class="font-rubik desktop:text-xl text-center font-extralight text-gray-400">
Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en
            cuenta.
</span> </div> <div class="max-w-[1240px] phone:w-full phone:px-2 mx-auto mb-12 desktop:mb-14 desktop:mt-24 text-color01 flex gap-3 justify-center items-center flex-col"> <div class="flex flex-wrap justify-center items-center flex-row gap-8 flex-1"> ${renderComponent($$result, "CardParty", CardParty, { "guid": "1", "title": "M\xFAsica", "icon": "music", "description": "\xBFCu\xE1l es la canci\xF3n que no debe faltar en la PlayList de la fiesta?", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/CardParty.jsx", "client:component-export": "default" })} ${renderComponent($$result, "CardParty", CardParty, { "guid": "2", "title": "Dress Code", "icon": "dress-code", "description": "Una orientaci\xF3n para tu vestuario", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/CardParty.jsx", "client:component-export": "default" })} ${renderComponent($$result, "CardParty", CardParty, { "guid": "3", "title": "Tips y Notas", "icon": "tips", "description": "Informaci\xF3n importante para tener en cuenta", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/CardParty.jsx", "client:component-export": "default" })} </div> </div> </section> ${renderComponent($$result, "Divider", $$Divider, {})}`;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/sections/Party.astro", void 0);

const $$Astro = createAstro();
const $$InstagramIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InstagramIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(Astro2.props.class, "class")} viewBox="0 0 24 24" fill="none" stroke="#b16d20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg>`;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/icons/InstagramIcon.astro", void 0);

const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-sfdt5hkr> <div class="max-w-[1140px] phone:w-full phone:px-2 mx-auto mb-12 mt-12 desktop:mb-14 desktop:mt-24 text-color01 flex gap-3 justify-center items-center flex-col" data-astro-cid-sfdt5hkr> ${renderComponent($$result, "Title", $$Title, { "title": "Compartimos este d\xEDa junto a ti", "data-astro-cid-sfdt5hkr": true })} <span class="font-rubik desktop:text-xl text-center font-extralight text-gray-400" data-astro-cid-sfdt5hkr>
Comparte tus fotos y videos de este hermoso día
</span> ${renderComponent($$result, "InstagramIcon", $$InstagramIcon, { "class": "w-16 mt-6", "data-astro-cid-sfdt5hkr": true })} <p class="font-raleway text-4xl text-color03 desktop:text-6xl" data-astro-cid-sfdt5hkr>
@dahilua
</p> <a href="https://www.instagram.com/dahilua/" class="bg-color01 mt-10 translate-x-2 transition max-w-40 min-w-40 text-center text-color02 py-3 rounded-3xl" target="_blank" data-astro-cid-sfdt5hkr>
Ver en Instagram
</a> </div> </section> `;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/sections/Instagram.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="flex flex-row justify-between max-w-6xl mx-auto p-4 gap-10 desktop:p-12"> <p class="text-gray-400">@2024 - Alexander Moscol Bravo -
<br class="desktop:hidden block">
"Con amor para johan y dahiana"</p> <a href="https://www.instagram.com/alexander_brav/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#969696" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg> </a> </div> </footer>`;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/sections/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cumple de Galia" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="hero" class="hidden"> ${renderComponent($$result2, "Hero", $$Hero, {})} <section class="p-4"> ${renderComponent($$result2, "Countdown", $$Countdown, {})} ${renderComponent($$result2, "PrincipalDate", $$PrincipalDate, {})} ${renderComponent($$result2, "Message", $$Message, {})} ${renderComponent($$result2, "Party", $$Party, {})} ${renderComponent($$result2, "Instagram", $$Instagram, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </section> </div> ` })}`;
}, "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/pages/index.astro", void 0);

const $$file = "G:/01-Galia/Nueva carpeta/invitacion-matrimonio-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

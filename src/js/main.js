/* eslint-disable no-useless-escape */

import "../sass/main.sass";
import { Forms } from "./components/forms/forms";
import { FormValidation } from "./components/formValidation/formValidation";
import { Modal } from "./components/modal/modal";

window.addEventListener("DOMContentLoaded", () => {
	const modal = new Modal({
		trigger: "#ModalTrigger",
		modal: ".Modal",
		underlay: ".ModalUnderlay",
		closeButton: ".Modal-CloseButton"
	});

	const smallForm = new Forms({
		formSelector: ".Service-Form, .SmallForm",
		submitButton: ".Button, .Button_style_snow",
		databaseName: "customerEmails"
	});

	const extendedForm = new Forms({
		formSelector: "#LargeForm",
		submitButton: "#LargeForm-SubmitButton",
		databaseName: "customers"
	});

	const modalForm = new Forms({
		formSelector: ".ModalForm",
		submitButton: ".ModalForm-SubmitButton",
		databaseName: "newsletter"
	});

	const smallFormValidation = new FormValidation({
		form: ".SmallForm",
		inputs: [
			{
				uniqueName: "email",
				selector: ".SmallForm-Input",
				testRegExp:
					// eslint-disable-next-line max-len
					/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
				style: {
					valid: `
						color: #00cc69;
						font-family: var(--light-font);
					`,
					unvalid: `
						color: #fe355a;
						font-family: var(--light-font);
					`
				}
			}
		],
		initialInputStyle: `
			color: var(--white);
			font-family: var(--thin-font);
		`,
		submitButton: "#SmallForm-SubmitButton"
	});

	const extendedFormValidation = new FormValidation({
		form: ".LargeForm",
		inputs: [
			{
				uniqueName: "name",
				selector: ".LargeForm-NameInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/^([а-яё]+|[a-z]+)$/i,
				style: {
					valid: `
						color: #00cc69;
						font-family: var(--default-font);
					`,
					unvalid: `
						color: #fe355a;
						font-family: var(--default-font);
					`
				}
			},
			{
				uniqueName: "email",
				selector: ".LargeForm-EmailInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
				style: {
					valid: `
						color: #00cc69;
						font-family: var(--default-font);
					`,
					unvalid: `
						color: #fe355a;
						font-family: var(--default-font);
					`
				}
			}
		],
		initialInputStyle: `
			color: var(--white);
			font-family: var(--default-font);
		`,
		submitButton: "#LargeForm-SubmitButton"
	});

	const modalFormValidation = new FormValidation({
		form: ".ModalForm",
		inputs: [
			{
				uniqueName: "email",
				selector: ".ModalForm-Input",
				testRegExp:
					// eslint-disable-next-line max-len
					/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
				style: {
					valid: `
						color: #00cc69;
						font-family: var(--medium-font);
					`,
					unvalid: `
						color: #fe355a;
						font-family: var(--medium-font);
					`
				}
			}
		],
		initialInputStyle: `
			color: #030f4b;
			font-family: var(--medium-font);
		`,
		submitButton: ".ModalForm-SubmitButton"
	});

	modal.init();
	smallForm.init();
	extendedForm.init();
	modalForm.init();
	smallFormValidation.init();
	extendedFormValidation.init();
	modalFormValidation.init();
});

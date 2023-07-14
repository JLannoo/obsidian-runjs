import { BaseComponent, App, Editor, Modal, Notice, Plugin, PluginSettingTab, Setting } from "obsidian";
import { logger } from "./utils/print";

export default class RunJSPlugin extends Plugin {
	async onload() {
		logger("loaded");

		this.registerMarkdownPostProcessor(async (el, ctx) => {
			const codeBlocks = el.querySelectorAll("code");

			for(const block of codeBlocks) {
				if (block.classList.contains("language-js")) {
					await this.addRunButton(block.parentElement as HTMLElement, () => this.run(block));
				}
			}	
		});
	}

	async onunload() {
		logger("unloaded");
	}

	async run(element: HTMLElement) {
		const code = element.innerText;

		try {
			const result = eval(code);

			this.showNotice(`${result}`, 1000);

			return result;
		} catch (e: any) {
			this.showNotice(`Error: ${e}`);
			return e;
		}
	}

	async addRunButton(element: HTMLElement, callback: () => void) {
		const button = document.createElement("button");
		button.innerText = "Run";
		button.classList.add("copy-code-button");
		button.style.marginRight = "50px";

		button.addEventListener("click", callback);

		element.appendChild(button);
	}

	showNotice(...args: ConstructorParameters<typeof Notice>) {
		new Notice(`RunJS: ${args[0]}`, args[1]);
	}
}

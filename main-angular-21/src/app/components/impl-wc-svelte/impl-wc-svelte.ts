import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { environment } from '../../../environments/environment';

interface WebComponent {
  label: string;
  src: string;
}

@Component({
  selector: 'impl-wc-svelte',
  templateUrl: './impl-wc-svelte.html',
  standalone: false
})
export class ImplWcSvelteComponent {

  @ViewChild('wc_container') wcContainer!: ElementRef;

  private wcInstances = new Map<string, HTMLElement>();

  webComponents: WebComponent[] = [
    {
      label: '',
      src: ''
    },
    {
      label: 'wc-table',
      src: `${environment.cdnUrl}/table-wc`
    },
    {
      label: 'wc-counter',
      src: `${environment.cdnUrl}/wc-counter`
    }
  ]

  currentComponent?: WebComponent;

  loading = true;

  constructor(private vcr: ViewContainerRef) { }

  ngOnInit(): void { }

  async loadMicroFrontend() {
    // const module = await loadRemoteModule({
    //   type: 'module',
    //   remoteEntry: 'http://localhost:4202/remoteEntry.js',
    //   exposedModule: './UserCard'
    // });
    // const component = module.UserCardComponent;
    // this.vcr.createComponent(component);
  }

  private ensureScriptLoaded(wc: WebComponent): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!wc.src) return resolve();

      const scriptId = `wc-script-${wc.label}`;
      if (document.getElementById(scriptId)) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.type = 'module';
      script.src = wc.src;
      script.id = scriptId;
      script.onload = () => resolve();
      script.onerror = () => reject(`No se pudo cargar el script: ${wc.src}`);
      document.body.appendChild(script);
    });
  }

  async loadWebComponent(event: Event) {
    const label = (event.target as HTMLSelectElement).value;
    const wc = this.webComponents.find(wc => wc.label === label);

    this.currentComponent = wc;

    if (!wc?.src || !wc?.label) return;

    this.loading = true;

    try {
      await this.ensureScriptLoaded(wc);

      let wcElement = this.wcInstances.get(wc.label);

      if (!wcElement) {
        wcElement = document.createElement(wc.label);

        (wcElement as any).getData = () => Promise.resolve([
          { id: 1, name: 'John Doe', email: '' },
          { id: 2, name: 'Jane Smith', email: '' },
          { id: 3, name: 'Alice Brown', email: '' }
        ]);

        wcElement.addEventListener('onRowClick', (event: any) => {
          console.log('Row clicked:', event.detail);
        });

        this.wcInstances.set(wc.label, wcElement);
      }

      this.loading = false;

      setTimeout(() => {
        this.wcContainer.nativeElement.innerHTML = '';
        this.wcContainer.nativeElement.appendChild(wcElement);
      }, 1);
    } catch (err) {
      console.error(err);
      this.loading = false;
    }
  }

  setData() {
    // Llama a la función setData expuesta por el web component
    if (!this.currentComponent) return;

    const wcElement = this.wcInstances.get(this.currentComponent.label);
    if (!wcElement) return;

    (wcElement as any).setData({
      id: 4,
      name: 'Bob Johnson test',
      email: 'bob.johnsontest@example.com'
    });
  }
}

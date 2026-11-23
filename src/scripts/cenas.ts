import { cenas, rotinas } from '../data/conteudo';

const stage = document.querySelector<HTMLElement>('.scene-stage');
const buttons = [...document.querySelectorAll<HTMLButtonElement>('[data-scene]')];
const slider = document.querySelector<HTMLInputElement>('#intensidade');
const output = document.querySelector<HTMLOutputElement>('#intensidade-valor');
const description = document.querySelector<HTMLElement>('#descricao-cena');
const reset = document.querySelector<HTMLButtonElement>('.reset-scene');

if (stage && slider && output && description && reset) {
  const setIntensity = (value: number) => {
    const safeValue = Math.min(100, Math.max(20, value));
    slider.value = String(safeValue);
    slider.setAttribute('aria-valuetext', `${safeValue}%`);
    output.value = `${safeValue}%`;
    // Gentle illustrative attenuation only; each preset has its own rendered light.
    stage.style.setProperty('--dimming', String((100 - safeValue) / 220));
  };
  const setScene = (id: string | undefined) => {
    const scene = cenas.find(item => item.id === id);
    if (!scene) return;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.scene === scene.id)));
    stage.querySelectorAll<HTMLElement>('[data-scene-image]').forEach(picture => picture.classList.toggle('is-active', picture.dataset.sceneImage === scene.id));
    description.textContent = scene.descricao;
    stage.setAttribute('aria-label', `Sala ilustrativa, atmosfera ${scene.nome}: ${scene.descricao}`);
    const image = stage.querySelector<HTMLImageElement>(`[data-scene-image="${scene.id}"] img`);
    stage.classList.toggle('has-image-error', Boolean(image?.complete && !image.naturalWidth));
    const error = stage.querySelector<HTMLElement>('.image-error');
    if (error) error.hidden = !stage.classList.contains('has-image-error');
    setIntensity(scene.intensidade);
  };
  buttons.forEach(button => { button.disabled = false; button.addEventListener('click', () => setScene(button.dataset.scene)); });
  slider.disabled = false;
  reset.disabled = false;
  setIntensity(cenas[0].intensidade);
  slider.addEventListener('input', () => setIntensity(slider.valueAsNumber));
  reset.addEventListener('click', () => setScene('acolher'));
}

const routineButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-routine]')];
const plan = document.querySelector<HTMLElement>('#planta-rotina');
const routineDescription = document.querySelector<HTMLElement>('#rotina-descricao');
routineButtons.forEach(button => {
  button.disabled = false;
  button.addEventListener('click', () => {
    const routine = rotinas.find(item => item.id === button.dataset.routine);
    if (!routine || !plan || !routineDescription) return;
    plan.dataset.activeRoutine = routine.id;
    routineDescription.textContent = routine.descricao;
    routineButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  });
});

document.querySelectorAll<HTMLImageElement>('.media-fallback img').forEach(img => {
  const showError = () => {
    const holder = img.closest<HTMLElement>('.media-fallback');
    if (!holder) return;
    const scene = img.closest<HTMLElement>('[data-scene-image]');
    if (scene && !scene.classList.contains('is-active')) return;
    holder.classList.add('has-image-error');
    const message = holder.querySelector<HTMLElement>('.image-error');
    if (message) message.hidden = false;
  };
  img.addEventListener('error', showError);
  if (img.complete && !img.naturalWidth) showError();
});

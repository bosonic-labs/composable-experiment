
import Composable from 'Composable/src/Composable';

export let Element = Composable.compose.call(
  HTMLElement,
  Composable
  // TemplateStamping,       // add shadow root creation and template support
  // AttributeMarshalling,   // add marshaling of attributes to properties
);

export function register(tag, prototype) {
  let mixins = prototype.mixins || [];
  let Subclass = Element.compose(prototype, ...mixins);
  document.registerElement(tag, Subclass);
  return Subclass;
}
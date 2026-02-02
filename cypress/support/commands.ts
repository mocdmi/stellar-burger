/* eslint-disable */

export {};


declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      drag(options?: { position?: string }): Chainable<Subject>;
    }
  }
}

Cypress.Commands.add(
  'drag',
  { prevSubject: true },
  (subject, options?: { position?: string }) => {
    const draggable = subject[0];
    const dataTransfer = new DataTransfer();

    const dragStartEvent = new DragEvent('dragstart', {
      bubbles: true,
      cancelable: true,
      dataTransfer,
    });
    const dragOverEvent = new DragEvent('dragover', {
      bubbles: true,
      cancelable: true,
      dataTransfer,
    });
    const dropEvent = new DragEvent('drop', {
      bubbles: true,
      cancelable: true,
      dataTransfer,
    });

    Object.defineProperty(dragStartEvent, 'dataTransfer', {
      value: dataTransfer,
    });
    Object.defineProperty(dragOverEvent, 'dataTransfer', {
      value: dataTransfer,
    });
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: dataTransfer,
    });

    draggable.dispatchEvent(dragStartEvent);

    const dropTargetSelector = options?.position || '[data-cy="drop-zone-filling"]';
    const dropZone = Cypress.$(dropTargetSelector)[0];
    if (dropZone) {
      dropZone.dispatchEvent(dragOverEvent);
      dropZone.dispatchEvent(dropEvent);
    }

    draggable.dispatchEvent(new DragEvent('dragend', { bubbles: true }));

    return subject;
  }
);

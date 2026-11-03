## ADDED Requirements

### Requirement: Sistema de diseño accesible
La interfaz SHALL construirse con un conjunto común de componentes y estilos de Invoicely App, y SHALL cumplir el nivel AA de las WCAG 2.2 en contraste de color, uso con teclado y etiquetado de controles.

#### Scenario: Página de muestra sin infracciones de accesibilidad
- **WHEN** se analiza la página de muestra del sistema de diseño con una herramienta automática de accesibilidad
- **THEN** no se detectan infracciones de nivel A ni AA

#### Scenario: Uso con teclado
- **WHEN** un usuario abre un diálogo con el teclado
- **THEN** el foco pasa al diálogo, queda atrapado en él y vuelve al control de origen al cerrarlo con Escape

#### Scenario: Identidad visual
- **WHEN** un usuario abre cualquier pantalla de Invoicely App
- **THEN** ve el logotipo, la tipografía y la paleta de Invoicely App

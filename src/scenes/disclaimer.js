import k from "../kaplayCtx";

export default function disclaimer() {
  k.add([
    k.text(
      `
        Sonic is owned by SEGA.
        This is a game made by @MsLotusFLowerBomb as a student and Mother meant for my son, an avid Shin sonic fan. 
        I do not own any rights to the characters or the music and credit goes to @JSLegendDev for the tutorial and lesson.
        Assets can be found at:  https://github.com/JSLegendDev/sonic-runner

        click the link to play the game: https://mslotusflowerbomb.github.io/sonic-runner/

        
        
      `,
      { font: "mania", size: 32 }
    ),
  ]);

  k.add([
    k.text("Press Space/Click/Touch to Start The Game", {
      font: "mania",
      size: 64,
    }),
    k.anchor("center"),
    k.pos(k.center()),
  ]);

  k.onButtonPress("jump", () => k.go("main-menu"));
}
import Tone from 'tone';

const instruments = [];

instruments.push({
  name: 'PolySynth',
  synth: new Tone.PolySynth(7, Tone.Synth).toMaster(),
  volume: 0.5,
});

instruments.push({
  name: 'Harmonics',
  synth: new Tone.AMSynth({
    harmonicity: 3.999,
    oscillator: {
      type: 'square',
    },
    envelope: {
      attack: 0.03,
      decay: 0.3,
      sustain: 0.7,
      release: 0.8,
    },
    modulation: {
      volume: 12,
      type: 'square6',
    },
    modulationEnvelope: {
      attack: 2,
      decay: 3,
      sustain: 0.8,
      release: 0.1,
    },
  }).toMaster(),
  volume: 0.5,
});

instruments.push({
  name: 'Tiny',
  synth: new Tone.AMSynth({
    harmonicity: 2,
    oscillator: {
      type: 'amsine2',
      modulationType: 'sine',
      harmonicity: 1.01,
    },
    envelope: {
      attack: 0.006,
      decay: 4,
      sustain: 0.04,
      release: 1.2,
    },
    modulation: {
      volume: 13,
      type: 'amsine2',
      modulationType: 'sine',
      harmonicity: 12,
    },
    modulationEnvelope: {
      attack: 0.006,
      decay: 0.2,
      sustain: 0.2,
      release: 0.4,
    },
  }).toMaster(),
  volume: 0.7,
});

instruments.push({
  name: 'Electric Cello',
  synth: new Tone.FMSynth({
    harmonicity: 3.01,
    modulationIndex: 14,
    oscillator: {
      type: 'triangle',
    },
    envelope: {
      attack: 0.2,
      decay: 0.3,
      sustain: 0.1,
      release: 1.2,
    },
    modulation: {
      type: 'square',
    },
    modulationEnvelope: {
      attack: 0.01,
      decay: 0.5,
      sustain: 0.2,
      release: 0.1,
    },
  }).toMaster(),
  volume: 0.5,
});

instruments.push({
  name: 'Kalimba',
  synth: new Tone.FMSynth({
    harmonicity: 8,
    modulationIndex: 2,
    oscillator: {
      type: 'sine',
    },
    envelope: {
      attack: 0.001,
      decay: 2,
      sustain: 0.1,
      release: 2,
    },
    modulation: {
      type: 'square',
    },
    modulationEnvelope: {
      attack: 0.002,
      decay: 0.2,
      sustain: 0,
      release: 0.2,
    },
  }).toMaster(),
  volume: 0.5,
});

instruments.push({
  name: 'Thin Saws',
  synth: new Tone.FMSynth({
    harmonicity: 0.5,
    modulationIndex: 1.2,
    oscillator: {
      type: 'fmsawtooth',
      modulationType: 'sine',
      modulationIndex: 20,
      harmonicity: 3,
    },
    envelope: {
      attack: 0.05,
      decay: 0.3,
      sustain: 0.1,
      release: 1.2,
    },
    modulation: {
      volume: 0,
      type: 'triangle',
    },
    modulationEnvelope: {
      attack: 0.35,
      decay: 0.1,
      sustain: 1,
      release: 0.01,
    },
  }).toMaster(),
  volume: 0.7,
});


instruments.push({
  name: 'Bah',
  synth: new Tone.MonoSynth({
    volume: 10,
    oscillator: {
      type: 'sawtooth',
    },
    filter: {
      Q: 2,
      type: 'bandpass',
      rolloff: -24,
    },
    envelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.2,
      release: 0.6,
    },
    filterEnvelope: {
      attack: 0.02,
      decay: 0.4,
      sustain: 1,
      release: 0.7,
      releaseCurve: 'linear',
      baseFrequency: 20,
      octaves: 5,
    },
  }).toMaster(),
  volume: 0.7,
});


instruments.push({
  name: 'Bass Guitar',
  synth: new Tone.MonoSynth({
    oscillator: {
      type: 'fmsquare5',
      modulationType: 'triangle',
      modulationIndex: 2,
      harmonicity: 0.501,
    },
    filter: {
      Q: 1,
      type: 'lowpass',
      rolloff: -24,
    },
    envelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.4,
      release: 2,
    },
    filterEnvelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.8,
      release: 1.5,
      baseFrequency: 50,
      octaves: 4.4,
    },
  }).toMaster(),
  volume: 0.5,
});


instruments.push({
  name: 'Brass Circuit',
  synth: new Tone.MonoSynth({
    portamento: 0.01,
    oscillator: {
      type: 'sawtooth',
    },
    filter: {
      Q: 2,
      type: 'lowpass',
      rolloff: -24,
    },
    envelope: {
      attack: 0.1,
      decay: 0.1,
      sustain: 0.6,
      release: 0.5,
    },
    filterEnvelope: {
      attack: 0.05,
      decay: 0.8,
      sustain: 0.4,
      release: 1.5,
      baseFrequency: 2000,
      octaves: 1.5,
    },
  }).toMaster(),
  volume: 0.5,
});


instruments.push({
  name: 'Cool Guy',
  synth: new Tone.MonoSynth({
    oscillator: {
      type: 'pwm',
      modulationFrequency: 1,
    },
    filter: {
      Q: 6,
      rolloff: -24,
    },
    envelope: {
      attack: 0.025,
      decay: 0.3,
      sustain: 0.9,
      release: 2,
    },
    filterEnvelope: {
      attack: 0.245,
      decay: 0.131,
      sustain: 0.5,
      release: 2,
      baseFrequency: 20,
      octaves: 7.2,
      exponent: 2,
    },
  }).toMaster(),
  volume: 0.2,
});

instruments.push({
  name: 'Pianoetta',
  synth: new Tone.MonoSynth({
    oscillator: {
      type: 'square',
    },
    filter: {
      Q: 2,
      type: 'lowpass',
      rolloff: -12,
    },
    envelope: {
      attack: 0.005,
      decay: 3,
      sustain: 0,
      release: 0.45,
    },
    filterEnvelope: {
      attack: 0.001,
      decay: 0.32,
      sustain: 0.9,
      release: 3,
      baseFrequency: 700,
      octaves: 2.3,
    },
  }).toMaster(),
  volume: 0.2,
});


instruments.push({
  name: 'Pizz',
  synth: new Tone.MonoSynth({
    oscillator: {
      type: 'sawtooth',
    },
    filter: {
      Q: 3,
      type: 'highpass',
      rolloff: -12,
    },
    envelope: {
      attack: 0.01,
      decay: 0.3,
      sustain: 0,
      release: 0.9,
    },
    filterEnvelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0,
      release: 0.1,
      baseFrequency: 800,
      octaves: 1.2,
    },
  }).toMaster(),
  volume: 0.7,
});

instruments.push({
  name: 'Alien Chorus',
  synth: new Tone.Synth({
    oscillator: {
      type: 'fatsine4',
      spread: 60,
      count: 10,
    },
    envelope: {
      attack: 0.4,
      decay: 0.01,
      sustain: 1,
      attackCurve: 'sine',
      releaseCurve: 'sine',
      release: 0.4,
    },
  }).toMaster(),
  volume: 0.5,
});

instruments.push({
  name: 'Windy',
  synth: new Tone.Synth({
    portamento: 0.0,
    oscillator: {
      type: 'square4',
    },
    envelope: {
      attack: 2,
      decay: 1,
      sustain: 0.2,
      release: 2,
    },
  }).toMaster(),
  volume: 0.5,
});

instruments.push({
  name: 'Drop Pulse',
  synth: new Tone.Synth({
    oscillator: {
      type: 'pulse',
      width: 0.8,
    },
    envelope: {
      attack: 0.01,
      decay: 0.05,
      sustain: 0.2,
      releaseCurve: 'bounce',
      release: 0.4,
    },
  }).toMaster(),
  volume: 0.5,
});

instruments.push({
  name: 'Marimba',
  synth: new Tone.Synth({
    oscillator: {
      partials: [
        1,
        0,
        2,
        0,
        3,
      ],
    },
    envelope: {
      attack: 0.001,
      decay: 1.2,
      sustain: 0,
      release: 1.2,
    },
  }).toMaster(),
  volume: 0.5,
});

instruments.push({
  name: 'Steel Pan',
  synth: new Tone.Synth({
    oscillator: {
      type: 'fatcustom',
      partials: [0.2, 1, 0, 0.5, 0.1],
      spread: 40,
      count: 3,
    },
    envelope: {
      attack: 0.001,
      decay: 1.6,
      sustain: 0,
      release: 1.6,
    },
  }).toMaster(),
  volume: 0.5,
});

instruments.push({
  name: 'Super Saw',
  synth: new Tone.Synth({
    oscillator: {
      type: 'fatsawtooth',
      count: 3,
      spread: 30,
    },
    envelope: {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.5,
      release: 0.4,
      attackCurve: 'exponential',
    },
  }).toMaster(),
  volume: 0.5,
});

instruments.push({
  name: 'Tree Trunk',
  synth: new Tone.Synth({
    oscillator: {
      type: 'sine',
    },
    envelope: {
      attack: 0.001,
      decay: 0.1,
      sustain: 0.1,
      release: 1.2,
    },
  }).toMaster(),
  volume: 0.5,
});

instruments.push({
  name: 'Picked 1',
  synth: new Tone.PolySynth(7, () => {
    return new Tone.Synth({
      oscillator: {
        type: 'amtriangle',
        harmonicity: 0.5,
        modulationType: 'sine',
      },
      envelope: {
        attackCurve: 'exponential',
        attack: 0.025,
        decay: 0.2,
        sustain: 0.2,
        release: 1.5,
      },
      portamento: 0.05,
    });
  }).toMaster(),
  volume: 1,
});

instruments.push({
  name: 'Picked 2',
  synth: new Tone.PolySynth(7, () => {
    return new Tone.Synth({
      oscillator: {
        type: 'fmtriangle',
        harmonicity: 1,
        modulationType: 'square',
        modulationIndex: 4,
      },
      envelope: {
        attackCurve: 'exponential',
        attack: 0.025,
        decay: 0.2,
        sustain: 0.2,
        release: 0.7,
      },
      portamento: 0.05,
    });
  }).toMaster(),
  volume: 0.2,
});

instruments.push({
  name: 'Saw Toothbrush',
  synth: new Tone.PolySynth(7, () => {
    return new Tone.Synth({
      oscillator: {
        type: 'pwm',
        modulationFrequency: 0.4,
      },
      envelope: {
        attackCurve: 'sine',
        attack: 0.03,
        decay: 0.22,
        sustain: 0.4,
        release: 0.8,
      },
    });
  }).toMaster(),
  volume: 0.1,
});

instruments.push({
  name: 'Pew pew 1',
  synth: new Tone.MembraneSynth().toMaster(),
  volume: 0.4,
});

instruments.push({
  name: 'Pew pew 2',
  synth: new Tone.MembraneSynth({
    pitchDecay: 0.07,
    octaves: 5,
    oscillator: {
      type: 'sine',
    },
    envelope: {
      attack: 0.001,
      decay: 0.2,
      sustain: 0.002,
      release: 1,
      attackCurve: 'exponential',
    },
  }).toMaster(),
  volume: 0.8,
});

instruments.push({
  name: 'Bips',
  synth: new Tone.MembraneSynth({
    pitchDecay: 0.03,
    octaves: 2,
    oscillator: {
      type: 'sine',
    },
    envelope: {
      attack: 0.02,
      decay: 0.5,
      sustain: 0.001,
      release: 0.1,
      attackCurve: 'exponential',
    },
  }).toMaster(),
  volume: 0.8,
});

const polySynthFilter = new Tone.AutoFilter({
  frequency: 0.8,
  type: 'sine',
  depth: 1,
  baseFrequency: 300,
  octaves: 2.6,
  filter: {
    type: 'lowpass ',
    rolloff: -24,
    Q: 3,
  },
})
  .toMaster()
  .start();

const polySynthPanner = new Tone.PanVol({
  pan: 0.4,
}).toMaster();

const polySynthDelay = new Tone.PingPongDelay({
  delayTime: '12n',
  maxDelay: 2,
  wet: 0.4,
  feedback: 0.3,
}).toMaster();

instruments.push({
  name: 'HDR',
  synth: new Tone.PolySynth(6, Tone.Synth, {
    oscillator: {
      type: 'sawtooth',
    },
  }).chain(polySynthFilter, polySynthDelay, polySynthPanner, Tone.Master),
  volume: 0.5,
});

export default instruments;

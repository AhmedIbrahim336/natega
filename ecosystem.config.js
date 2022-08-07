const common = {
  script: "./target/release/natega.exe",
  exec_interpreter: "none",
  exec_mode: "fork_mode",
  autorestart: false,
};

const commonEnv = {
  RUST_RUN_SERVER: false,
};

module.exports = {
  apps: [
    {
      ...common,
      name: "Natega 1",
      env_production: {
        RUST_RUN_SERVER: true,
        RUST_START: 103_000,
        RUST_END: 300_000,
      },
    },
    {
      ...common,
      name: "Natega 2",
      env_production: {
        ...commonEnv,
        RUST_START: 300_001,
        RUST_END: 500_000,
      },
    },
    {
      ...common,
      name: "Natega 3",
      env_production: {
        ...commonEnv,
        RUST_START: 500_001,
        RUST_END: 700_000,
      },
    },
    {
      ...common,
      name: "Natega 4",
      env_production: {
        ...commonEnv,
        RUST_START: 700_001,
        RUST_END: 900_000,
      },
    },
    {
      ...common,
      name: "Natega 5",
      env_production: {
        ...commonEnv,
        RUST_START: 900_001,
        RUST_END: 937_001,
      },
    },
  ],
};

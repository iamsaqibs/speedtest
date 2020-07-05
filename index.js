const speedTest = require('speedtest-net');

(async () => {
  try {
    console.log(await speedTest({
        acceptLicense: true,
        acceptGdpr: true,
        progress: (event) => console.log(event),
        // verbosity: 6,
    }));
  } catch (err) {
    console.log(err.message);
  } finally {
    process.exit(0);
  }
})();
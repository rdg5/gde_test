const { NodeSDK } = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-http");

const traceExporter = new OTLPTraceExporter({
    url: "http://localhost:4318/v1/traces"
})

const sdk = new NodeSDK({
    traceExporter,
    instrumentations: [ getNodeAutoInstrumentations() ],
  });
  
  sdk.start()
    .then(() => console.log("OTEL started"))
    .catch(err => console.error("Error starting OTEL", err));
  
  module.exports = { sdk };
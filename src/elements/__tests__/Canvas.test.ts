import { Canvas, drawCircle, drawLine, moveTo } from "../Canvas";

const originalDocumentCreateElement = document.createElement;
const setAttribute = jest.fn();
const ctxMock = {
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  stroke: jest.fn(),
  beginPath: jest.fn(),
  arc: jest.fn(),
};

beforeAll(() => {
  Object.defineProperty(document, "createElement", {
    configurable: true,
    value: () => ({
      getContext: () => ctxMock,
      setAttribute,
      style: {},
    }),
  });
});

afterAll(() => {
  Object.defineProperty(document, "createElement", {
    value: originalDocumentCreateElement,
  });
});

it("should work", () => {
  const canvas = new Canvas(
    { lineWidth: 2, color: "green", width: 100, height: 200 },
    moveTo(10, 10),
    drawLine(20, 20),
    drawCircle(40, 40, 50)
  );
  expect(canvas.lineWidth).toBe(2);
  expect(canvas.color).toBe("green");

  // moveTo();
  expect(ctxMock.moveTo).toHaveBeenCalledWith(10, 10);

  // drawLine();
  expect(ctxMock.lineTo).toHaveBeenCalledWith(20, 20);
  expect(ctxMock.stroke).toHaveBeenCalled();

  // drawCircle()
  expect(ctxMock.beginPath).toHaveBeenCalled();
  expect(ctxMock.moveTo).toHaveBeenCalledWith(90, 40);
  expect(ctxMock.arc).toHaveBeenCalledWith(40, 40, 50, 0, 2 * Math.PI);
  expect(ctxMock.stroke).toHaveBeenCalledTimes(2);
});

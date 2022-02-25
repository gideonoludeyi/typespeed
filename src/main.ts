import { fromEvent } from 'rxjs';
import { bufferCount, filter, map } from 'rxjs/operators';

const NUM_OF_LATEST_WORDS = 8;

const toMinute = (ms: number) => ms / 60_000; // milliseconds to minute

const $ = document.querySelector.bind(document);

const typeAreaEl = $<HTMLTextAreaElement>('#type-area')!;
const speedEl = $<HTMLSpanElement>('#speed')!;

const wpm$ = fromEvent<InputEvent>(typeAreaEl, 'input').pipe(
    /**
     * listen only for events that occur by typing on the keys (ignores cut, paste, backspace, e.t.c)
     */
    filter((e) => e.inputType === 'insertText'),
    /**
     * listen only for events that occur as a result of typing the spacebar
     * to determine when a word is completed.
     */
    filter((e) => e.data === ' '), // listen only for spaces
    /**
     * extract, from each event object, the timestamp when the word was completed
     */
    map((e) => e.timeStamp),
    /**
     * accumulate the timestamps for the latest words into an array
     */
    bufferCount(NUM_OF_LATEST_WORDS, 1),
    /**
     * compute the range of the timestamps in the array
     * {@link https://www.google.com/search?q=statistics+range&ei=1TAZYpO7JOGa_QbJ_JSIDg&ved=0ahUKEwjT-ZyLzpv2AhVhTd8KHUk-BeEQ4dUDCA4&uact=5&oq=statistics+range&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEc6BwgAEEcQsAM6BwgAELADEENKBQgpEgExSgQIQRgASgUIQBIBMUoECEYYAFBYWFhgxAJoAXACeACAAQCIAQCSAQCYAQCgAQHIAQjAAQE&sclient=gws-wiz#wptab=s:H4sIAAAAAAAAAONgVuLQz9U3MCs3tHzEaMwt8PLHPWEprUlrTl5jVOHiCs7IL3fNK8ksqRQS42KDsnikuLjgmnh2MUm6ppQmJ5Zk5ucl5jjn5yWnFpS45RflluYkLmKVKkrMS09V0CguASooLslMLtZUSINIAgDe0cmyewAAAA}
     *
     */
    map((nums) => Math.max(...nums) - Math.min(...nums)),
    /**
     * convert the difference in timestamps into words per minute, using the number of words typed (WORD_WINDOW_SIZE)
     */
    map((diffTimestamp) => NUM_OF_LATEST_WORDS / toMinute(diffTimestamp))
);

wpm$.subscribe((wpm) => {
    speedEl.innerText = `${Math.round(wpm)}`;
});

#include <node.h>
#include <v8.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <string>

#define LEN 5 // size of a unicode santa emoji
#define TOTAL 16384

static void Method(const v8::FunctionCallbackInfo<v8::Value> &args)
{
    char santa[LEN] = "\U0001F385";
    char *buf = (char *)malloc(TOTAL);
    int bufused = 0;
    while (bufused < TOTAL)
    {
        memcpy(buf + bufused, santa, LEN);
        bufused += LEN;
    }

    while (write(1, buf, TOTAL))
        ;

    // v8::Isolate *isolate = args.GetIsolate();
    // args.GetReturnValue().Set(v8::String::NewFromUtf8(
    //                               isolate, "santa")
    //                               .ToLocalChecked());
}

// Not using the full NODE_MODULE_INIT() macro here because we want to test the
// addon loader's reaction to the FakeInit() entry point below.
extern "C" NODE_MODULE_EXPORT void
NODE_MODULE_INITIALIZER(v8::Local<v8::Object> exports,
                        v8::Local<v8::Value> module,
                        v8::Local<v8::Context> context)
{
    NODE_SET_METHOD(exports, "santa", Method);
}

static void FakeInit(v8::Local<v8::Object> exports,
                     v8::Local<v8::Value> module,
                     v8::Local<v8::Context> context)
{
    auto isolate = context->GetIsolate();
    auto exception = v8::Exception::Error(v8::String::NewFromUtf8(isolate,
                                                                  "FakeInit should never run!")
                                              .ToLocalChecked());
    isolate->ThrowException(exception);
}

// Define a Node.js module, but with the wrong version. Node.js should still be
// able to load this module, multiple times even, because it exposes the
// specially named initializer above.
#undef NODE_MODULE_VERSION
#define NODE_MODULE_VERSION 3
NODE_MODULE(NODE_GYP_MODULE_NAME, FakeInit)

#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    int primeiro = get_int("Insira um valor:");
    string operador = get_string("Insira um operador (+, -, /, *):");
    int segundo = get_int("Insira outro valor:");

    if (strcmp(operador, "+") == 0) {
        printf("O resultado é %i\n", primeiro + segundo);
    }
    else if (strcmp(operador, "-") == 0) {
        printf("O resultado é %i\n", primeiro - segundo);
    }
    else if (strcmp(operador, "/") == 0) {
        printf("O resultado é %i\n", primeiro / segundo);
    }
    else if (strcmp(operador, "*") == 0) {
        printf("O resultado é %i\n", primeiro * segundo);
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.ProgramSynthesis;
using Microsoft.ProgramSynthesis.AST;
using Microsoft.ProgramSynthesis.Compiler;
using Microsoft.ProgramSynthesis.Learning;
using Microsoft.ProgramSynthesis.Learning.Logging;
using Microsoft.ProgramSynthesis.Learning.Strategies;
using Microsoft.ProgramSynthesis.Specifications;
using <%= name %>.<%= learning %>;

namespace <%= name %>
{
    class Program
    {
        public static void Main(string[] args)
        {
            <% if (buildGrammar) { %>
            var grammar = Language.Grammar;
            var nodeBuilders = Language.Build.Node;
            <% } else { %>
            var parseResult = DSLCompiler.ParseGrammarFromFile("<%= name %>.grammar");
            parseResult.TraceDiagnostics();
            var grammar = parseResult.Value;
            <% } %>
            Console.WriteLine(grammar.Name);
            Console.WriteLine(ProgramNode.Parse("x", grammar, ASTSerializationFormat.HumanReadable));
            <% if (buildGrammar) { %>
            Console.WriteLine(nodeBuilders.Variable.x.Node);
            <% } %>
        }
    }
}
